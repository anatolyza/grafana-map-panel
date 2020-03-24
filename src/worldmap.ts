import * as _ from 'lodash';
import $ from 'jquery';
import * as L from './libs/leaflet';
import WorldmapCtrl from './worldmap_ctrl';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import 'leaflet-easybutton';
//import jsonQuery from 'json-query';

const tileServers = {
  'CartoDB Positron': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' + '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
  },
  'CartoDB Dark': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' + '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
  },
};

const tileServers2 = {
  First: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>First</a>',
    maxZoom: 17,
  }),
  Second: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>Second</a>',
    maxZoom: 17,
  }),
  Third: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>Third</a>',
    maxZoom: 17,
  }),
};

const iconTypes = require('./icon_types.json');

export default class WorldMap {
  ctrl: WorldmapCtrl;
  mapContainer: any;
  circles: any[];
  map: any;
  legend: any;
  circlesLayer: any;

  constructor(ctrl, mapContainer) {
    this.ctrl = ctrl;
    this.mapContainer = mapContainer;
    this.circles = [];
  }

  createMap() {
    if (this.ctrl.settings.tileserverUrlLight) {
      tileServers['CartoDB Positron'].url = this.ctrl.settings.interpolateVariable('tileserverUrlLight');
    }
    if (this.ctrl.settings.tileserverUrlDark) {
      tileServers['CartoDB Dark'].url = this.ctrl.settings.interpolateVariable('tileserverUrlDark');
    }
    if (this.ctrl.settings.tileserverUrlFirst) {
      tileServers2.First._url = this.ctrl.settings.interpolateVariable('tileserverUrlFirst');
    }
    if (this.ctrl.settings.tileserverUrlSecond) {
      tileServers2.Second._url = this.ctrl.settings.interpolateVariable('tileserverUrlSecond');
    }
    if (this.ctrl.settings.tileserverUrlThird) {
      tileServers2.Third._url = this.ctrl.settings.interpolateVariable('tileserverUrlThird');
    }
    const center = this.ctrl.settings.center;
    const mapCenter = (window as any).L.latLng(center.mapCenterLatitude, center.mapCenterLongitude);

    const zoomLevel = this.getEffectiveZoomLevel(center.mapZoomLevel);

    this.map = L.map(this.mapContainer, {
      worldCopyJump: true,
      preferCanvas: true,
      center: mapCenter,
      zoom: zoomLevel,
      zoomControl: this.ctrl.settings.showZoomControl,
      attributionControl: this.ctrl.settings.showAttribution,
    });
    this.setMouseWheelZoom();

    const selectedTileServer = tileServers[this.ctrl.tileServer];
    (window as any).L.tileLayer(selectedTileServer.url, {
      maxZoom: 18,
      subdomains: selectedTileServer.subdomains,
      reuseTiles: true,
      detectRetina: true,
      attribution: selectedTileServer.attribution,
    }).addTo(this.map);

    L.PM.initialize({ optIn: false });

    this.map.pm.addControls({
      position: 'topleft',
      drawMarker: false,
      editMode: false,
      dragMode: false,
      cutPolygon: false,
      drawCircleMarker: false,
    });

    L.easyButton(
      '<div style="background-color: DodgerBlue;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px dodgerblue;margin-left: 2px;"></div>',
      function(btn, map) {
        map.pm.setPathOptions({ color: 'DodgerBlue', fillColor: 'DodgerBlue', fillOpacity: 0.15, weight: 1.5 });
      }
    ).addTo(this.map);

    L.easyButton(
      '<div style="background-color: Crimson;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px Crimson;margin-left: 2px;"></div>',
      function(btn, map) {
        map.pm.setPathOptions({
          color: 'Crimson',
          fillColor: 'Crimson',
          fillOpacity: 0.15,
          weight: 1.5,
        });
      }
    ).addTo(this.map);

    L.easyButton(
      '<div style="background-color: LimeGreen;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px LimeGreen;margin-left: 2px;"></div>',
      function(btn, map) {
        map.pm.setPathOptions({
          color: 'LimeGreen',
          fillColor: 'LimeGreen',
          fillOpacity: 0.15,
          weight: 1.5,
        });
      }
    ).addTo(this.map);

    L.easyButton(
      '<div style="background-color: DimGray;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px DimGray;margin-left: 2px;"></div>',
      function(btn, map) {
        map.pm.setPathOptions({
          color: 'DimGray',
          fillColor: 'DimGray',
          fillOpacity: 0.15,
          weight: 1.5,
        });
      }
    ).addTo(this.map);

    L.control.layers(tileServers2).addTo(this.map);
  }

  renderMapFirst() {
    const _this = this;
    this.map.whenReady((ctx, options) => {
      _this.renderMap({ animate: false });
    });
  }

  renderMap(options?: {}) {
    options = options || {};
    _.defaults(options, { animate: true });

    if (!this.legend && this.ctrl.settings.showLegend) {
      this.createLegend();
    }

    console.info('Drawing circles');
    this.drawCircles();

    this.drawCustomAttribution();

    setTimeout(() => {
      this.drawMap(options);
    }, 1);
  }

  drawMap(options?: {}) {
    console.info('Drawing map');
    this.resize();
    if (this.ctrl.mapCenterMoved) {
      this.panToMapCenter(options);
    }
    //this.ctrl.updatePanelCorner();
  }

  getEffectiveZoomLevel(zoomLevel) {
    if (this.ctrl.settings.maximumZoom) {
      zoomLevel = Math.min(parseInt(this.ctrl.settings.maximumZoom, 10), zoomLevel);
    }
    return zoomLevel;
  }

  createLegend() {
    this.legend = (window as any).L.control({ position: 'bottomleft' });
    this.legend.onAdd = () => {
      this.legend._div = (window as any).L.DomUtil.create('div', 'info legend');
      this.legend.update();
      return this.legend._div;
    };

    this.legend.update = () => {
      const thresholds = this.ctrl.data.thresholds;
      let legendHtml = '';
      legendHtml += '<div class="legend-item"><i style="background:' + this.ctrl.settings.colors[0] + '"></i> ' + '&lt; ' + thresholds[0] + '</div>';
      for (let index = 0; index < thresholds.length; index += 1) {
        legendHtml +=
          '<div class="legend-item"><i style="background:' +
          this.ctrl.settings.colors[index + 1] +
          '"></i> ' +
          thresholds[index] +
          (thresholds[index + 1] ? '&ndash;' + thresholds[index + 1] + '</div>' : '+');
      }
      this.legend._div.innerHTML = legendHtml;
    };
    this.legend.addTo(this.map);

    // Optionally display legend in different DOM element.
    if (this.ctrl.settings.legendContainerSelector) {
      $(this.ctrl.settings.legendContainerSelector).append(this.legend._div);
    }
  }

  needToRedrawCircles(data) {
    console.info(`Data points ${data.length}. Circles on map ${this.circles.length}.`);

    if (this.circles.length === 0 && data.length > 0) {
      return true;
    }

    if (this.circles.length !== data.length) {
      return true;
    }

    const locations = _.map(_.map(this.circles, 'options'), 'location').sort();
    const dataPoints = _.map(data, 'key').sort();
    return !_.isEqual(locations, dataPoints);
  }

  filterEmptyAndZeroValues(data) {
    const countBefore = data.length;
    data = _.filter(data, o => {
      return !(this.ctrl.settings.hideEmpty && _.isNil(o.value)) && !(this.ctrl.settings.hideZero && o.value === 0);
    });
    const countAfter = data.length;
    const countFiltered = countAfter - countBefore;
    if (countFiltered > 0) {
      console.info(`Filtered ${countFiltered} records`);
    }
    return data;
  }

  clearCircles() {
    if (this.circlesLayer) {
      this.circlesLayer.clearLayers();
      this.removeCircles();
      this.circles = [];
    }
  }

  drawCircles() {
    const data = this.filterEmptyAndZeroValues(this.ctrl.data);
    if (this.needToRedrawCircles(data)) {
      console.info('Creating circles');
      this.clearCircles();
      this.createCircles(data);
    } else {
      console.info('Updating circles');
      this.updateCircles(data);
    }
    //Anatoly test
    // L.marker([32.8511, 35.4629], { icon: this.iconBuilder('NAMER') }).addTo(this.map);
    // L.marker([32.8515, 35.4633], { icon: this.iconBuilder('ACHZARIT') }).addTo(this.map);
    // L.marker([32.8517, 35.4636], { icon: this.iconBuilder('Anatoly') }).addTo(this.map);
  }

  iconBuilder(jsonIcon) {
    let MapIcon = '';

    const picked = iconTypes.Entities.find(o => o.type === jsonIcon);
    //console.log(picked);

    if (picked == null) {
      //Fallback Error Icon displayed if image not found in json
      MapIcon = L.icon({
        iconUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly93ZWIucmVzb3VyY2Uub3JnL2NjLyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSI0NzYuNjEyMTUiCiAgIGhlaWdodD0iNTIwLjYwNzEyIgogICBpZD0ic3ZnNjMxMiIKICAgc29kaXBvZGk6dmVyc2lvbj0iMC4zMiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40NSIKICAgc29kaXBvZGk6bW9kaWZpZWQ9InRydWUiCiAgIHZlcnNpb249IjEuMCI+CiAgPGRlZnMKICAgICBpZD0iZGVmczYzMTQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMzUiCiAgICAgaW5rc2NhcGU6Y3g9IjM1MCIKICAgICBpbmtzY2FwZTpjeT0iNTIwIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI4NzYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjIyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSI1IgogICAgIGlua3NjYXBlOndpbmRvdy15PSI3MyIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE2MzE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJDYXBhIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcuNDA3OCwtMTcyLjA1OTExKSI+CiAgICA8ZwogICAgICAgaWQ9Imc3NTc5IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMjkuMzI5OTc5LDAsMCwyOS4zMjk5NzksLTEyNDQ3LjY3MSwtMTU3MzIuMTIyKSI+CiAgICAgIDxwb2x5Z29uCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlZDFjMjQiCiAgICAgICAgIGlkPSJwb2x5Z29uNzU4MSIKICAgICAgICAgcG9pbnRzPSI0MzguMTYxLDU1Ny4zNjQgNDM1LjE2Nyw1NTQuNjc2IDQzMS4yNTYsNTU1LjYxOCA0MzIuODg4LDU1MS45NDEgNDI4LjA2Myw1NDcgNDM0Ljc4Niw1NDguOTI2IDQzOC4wNjMsNTQyLjI1IDQzOC4yMzgsNTQ5LjgwMSA0NDQuMzEzLDU1MS4yNSA0MzguNDc1LDU1My4zNTQgNDM4LjE2MSw1NTcuMzY0ICIgLz4KICAgICAgPHBvbHlnb24KICAgICAgICAgc3R5bGU9ImZpbGw6I2VkMWMyNCIKICAgICAgICAgaWQ9InBvbHlnb243NTgzIgogICAgICAgICBwb2ludHM9IjQ0My4zMTMsNTU2LjUgNDM2LjcyNyw1NTQuMTM1IDQzMy41NjMsNTYwIDQzMy45MDgsNTUzLjE1MyA0MzAuODk5LDU1MS41ODQgNDMzLjg3NSw1NTAuMDk4IDQzNC4zMTksNTQ2LjY5IDQzNi42NzUsNTQ5LjE5MyA0MzkuOTU4LDU0OC42NTUgNDM4LjQzOCw1NTEuNjg4IDQ0My4zMTMsNTU2LjUgIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==',
        iconSize: [38, 95], // size of the icon
        iconAnchor: [19, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [-2, -16], // point from which the popup should open relative to the iconAnchor
      });
    } else {
      MapIcon = L.icon({
        iconUrl: picked.iconUrl,
        iconSize: [38, 95], // size of the icon
        iconAnchor: [19, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [-2, -16], // point from which the popup should open relative to the iconAnchor
      });
    }

    return MapIcon;
  }

  createCircles(data) {
    console.log('createCircles: begin');
    const circles: any[] = [];
    const circlesByKey = {};
    data.forEach(dataPoint => {
      // Todo: Review: Is a "locationName" really required
      //       just for displaying a circle on a map?
      if (!dataPoint.locationName) {
        return;
      }
      let circle;

      if (circlesByKey[dataPoint.key] === undefined) {
        // Create circle.
        circle = this.createCircle(dataPoint);
        circles.push(circle);
        circlesByKey[dataPoint.key] = circle;
      } else {
        // Amend popup content if circle has been created already.
        circle = circlesByKey[dataPoint.key];
        this.extendPopupContent(circle, dataPoint);
      }
    });
    this.circlesLayer = this.addCircles(circles);
    this.circles = circles;
    console.log('createCircles: end');
  }

  updateCircles(data) {
    const circlesByKey = {};
    data.forEach(dataPoint => {
      // Todo: Review: Is a "locationName" really required
      //       just for displaying a circle on a map?
      if (!dataPoint.locationName) {
        return;
      }

      if (circlesByKey[dataPoint.key] === undefined) {
        // Update circle.
        const circle = this.updateCircle(dataPoint);
        if (circle) {
          circlesByKey[dataPoint.key] = circle;
        }
      } else {
        // Amend popup content if circle has been updated already.
        const circle = circlesByKey[dataPoint.key];
        this.extendPopupContent(circle, dataPoint);
      }
    });
  }

  createCircle(dataPoint) {
    // const circle = (window as any).L.circleMarker([dataPoint.locationLatitude, dataPoint.locationLongitude], {
    //   radius: this.calcCircleSize(dataPoint.value || 0),
    //   color: this.getColor(dataPoint.value),
    //   fillColor: this.getColor(dataPoint.value),
    //   fillOpacity: 0.5,
    //   location: dataPoint.key,
    //   stroke: Boolean(this.ctrl.settings.circleOptions.strokeEnabled),
    //   weight: parseInt(this.ctrl.settings.circleOptions.strokeWeight, 10) || 3,
    // });

    //let specialIcon = '';
    const specialIcon = (window as any).L.marker([dataPoint.locationLatitude, dataPoint.locationLongitude], {
      icon: this.iconBuilder(dataPoint.value),
    });

    // if (dataPoint.value === '1') {
    //   specialIcon = (window as any).L.marker([dataPoint.locationLatitude, dataPoint.locationLongitude], { icon: this.iconBuilder('NAMER') });
    // }
    // if (dataPoint.value === '4') {
    //   specialIcon = (window as any).L.marker([dataPoint.locationLatitude, dataPoint.locationLongitude], { icon: this.iconBuilder('ACHZARIT') });
    // }

    this.createClickthrough(specialIcon, dataPoint);
    const content = this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded);
    this.createPopup(specialIcon, content);

    return specialIcon;
  }

  updateCircle(dataPoint) {
    // Find back circle object by data point key.
    const circle = _.find(this.circles, cir => {
      return cir.options.location === dataPoint.key;
    });

    if (circle) {
      circle.setRadius(this.calcCircleSize(dataPoint.value || 0));
      circle.setStyle({
        color: this.getColor(dataPoint.value),
        fillColor: this.getColor(dataPoint.value),
        fillOpacity: 0.5,
        location: dataPoint.key,
      });

      // Re-create popup.
      circle.unbindPopup();
      const content = this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded);
      this.createPopup(circle, content);

      // Re-create clickthrough-link.
      this.createClickthrough(circle, dataPoint);

      return circle;
    }
  }

  calcCircleSize(dataPointValue) {
    const circleMinSize = parseInt(this.ctrl.settings.circleMinSize, 10) || 1;
    const circleMaxSize = parseInt(this.ctrl.settings.circleMaxSize, 10) || 10;

    // If measurement value equals zero, use minimum circle size.
    if (dataPointValue === 0) {
      return circleMinSize;
    }

    if (this.ctrl.data.valueRange === 0) {
      return circleMaxSize;
    }

    const dataFactor = (dataPointValue - this.ctrl.data.lowestValue) / this.ctrl.data.valueRange;
    const circleSizeRange = circleMaxSize - circleMinSize;

    return circleSizeRange * dataFactor + circleMinSize;
  }

  createClickthrough(circle, dataPoint) {
    /*
     * Features:
     * - Unify functionality from #129 and #190
     * - Generic variable interpolation from dataPoint
     * - Generic variable interpolation from dashboard variables
     * - Optionally open url in new window
     */

    // First, use link value directly from `clickthroughUrl` setting.
    let linkUrl;
    if (this.ctrl.settings.clickthroughUrl) {
      linkUrl = this.ctrl.settings.interpolateVariable('clickthroughUrl', dataPoint);
    }

    // Next, use link value from the data itself by using the
    // table control option `linkField` for looking it up.
    if (dataPoint.link) {
      linkUrl = dataPoint.link;

      // Interpolate the dashboard and dataPoint variables.
      linkUrl = this.ctrl.settings.interpolateVariableValue(linkUrl, dataPoint);
    }

    // Deactivate all links first.
    circle.off('click');

    // Attach "onclick" event to data point linking.
    if (linkUrl) {
      const clickthroughOptions = this.ctrl.settings.clickthroughOptions;
      circle.on('click', evt => {
        if (clickthroughOptions && clickthroughOptions.windowName) {
          window.open(linkUrl, clickthroughOptions.windowName);
        } else {
          window.location.assign(linkUrl);
        }
      });
    }
  }

  createPopup(circle, label) {
    circle.bindPopup(label, {
      offset: (window as any).L.point(0, -2),
      className: 'worldmap-popup',
      closeButton: this.ctrl.settings.stickyLabels,
      autoPan: this.ctrl.settings.autoPanLabels,
      autoWidth: this.ctrl.settings.autoWidthLabels,
    });

    circle.on('mouseover', evt => {
      const layer = evt.target;
      layer.bringToFront();
      circle.openPopup();
    });

    if (!this.ctrl.settings.stickyLabels) {
      circle.on('mouseout', () => {
        circle.closePopup();
      });
    }
  }

  extendPopupContent(circle, dataPoint) {
    const popup = circle.getPopup();
    let popupContent = popup._content;
    popupContent += `\n${this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded)}`;
    circle.setPopupContent(popupContent);
  }

  getPopupContent(locationName, value) {
    let unit;
    if (_.isNaN(value)) {
      value = 'n/a';
    } else {
      unit = value && value === 1 ? this.ctrl.settings.unitSingular : this.ctrl.settings.unitPlural;
    }
    const label = `${locationName}: ${value} ${unit || ''}`.trim();
    return label;
  }

  getColor(value) {
    for (let index = this.ctrl.data.thresholds.length; index > 0; index -= 1) {
      if (value >= this.ctrl.data.thresholds[index - 1]) {
        return this.ctrl.settings.colors[index];
      }
    }
    return _.first(this.ctrl.settings.colors);
  }

  resize() {
    this.map.invalidateSize();
  }

  panToMapCenter(options?: any) {
    console.log('panToMapCenter');

    // Get a bunch of metadata from settings and data which
    // controls the map centering and zoom level.
    const mapDimensions = this.ctrl.settings.center;

    let coordinates = [mapDimensions.mapCenterLatitude, mapDimensions.mapCenterLongitude];
    let zoomLevel = mapDimensions.mapZoomLevel;

    if (mapDimensions.mapFitData) {
      // Choose optimal map center and zoom level based on the data points displayed.
      // This is done by computing the boundaries of a Leaflet feature group created
      // from the contents of the circles layer.
      // https://leafletjs.com/reference-1.4.0.html#map-getboundszoom
      if (this.circlesLayer) {
        const group = L.featureGroup(this.circlesLayer.getLayers());
        const bounds = group.getBounds();
        if (!_.isEmpty(bounds)) {
          coordinates = bounds.getCenter();
          zoomLevel = this.map.getBoundsZoom(bounds);
        }
      }
    } else if (mapDimensions.mapZoomByRadius) {
      // Compute zoom level based on current coordinates and given radius in kilometers.
      // This is done by temporarily adding a circle with the respective radius and
      // computing its boundaries before removing it right away.
      // Note that adding and removing a Leaflet layer to/from a map within a single
      // frame will not trigger any animations, see
      // https://github.com/Leaflet/Leaflet/issues/5357#issuecomment-282023917
      const radius = mapDimensions.mapZoomByRadius * 1000.0;
      const circle = L.circle(coordinates, { radius: radius }).addTo(this.map);
      const bounds = circle.getBounds();
      circle.remove();
      coordinates = bounds.getCenter();
      zoomLevel = this.map.getBoundsZoom(bounds);
    }

    zoomLevel = this.getEffectiveZoomLevel(zoomLevel);

    // Apply coordinates and zoom level to Leaflet map.
    this.map.setView(coordinates, zoomLevel, options);

    // Resolve signal / release lock.
    this.ctrl.mapCenterMoved = false;
  }

  removeLegend() {
    this.legend.remove(this.map);
    this.legend = null;
  }

  setMouseWheelZoom() {
    if (!this.ctrl.settings.mouseWheelZoom) {
      this.map.scrollWheelZoom.disable();
    } else {
      this.map.scrollWheelZoom.enable();
    }
  }

  addCircles(circles) {
    // Todo: Optionally add fixed custom attributions to the circle layer.
    const attribution = undefined;
    return (window as any).L.layerGroup(circles, { attribution: attribution }).addTo(this.map);
  }

  removeCircles() {
    this.map.removeLayer(this.circlesLayer);
  }

  setZoom(zoomFactor) {
    this.map.setZoom(parseInt(zoomFactor, 10));
  }

  remove() {
    this.circles = [];
    if (this.circlesLayer) {
      this.removeCircles();
    }
    if (this.legend) {
      this.removeLegend();
    }
    this.map.remove();
  }

  drawCustomAttribution() {
    // The operator wants a custom attribution.
    if (this.ctrl.settings.customAttribution) {
      // The custom attribution text.
      const attribution = this.ctrl.settings.customAttributionText;

      // Amend the Leaflet map by clearing out and setting the custom attribution text.
      const attributionControl = this.map.attributionControl;
      attributionControl._attributions = {};
      attributionControl.addAttribution(attribution);
    }
  }
}
