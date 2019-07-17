import { colors, numbersToSymbol, convertTimestamp } from 'helpers/utils';

// optimize it

const timezoneOffset = new Date().getTimezoneOffset();

const setConfig = chartData => {
  const priceData = chartData.map(item => ({
    x: item.TIMESTAMP * 1000,
    y: item.PRICE,
  }));

  const volumeData = chartData.map(item => ({
    x: item.TIMESTAMP * 1000,
    y: item.VOLUME24HOUR,
  }));

  const priceArray = chartData.map(item => item.PRICE);
  const volumeArray = chartData.map(item => item.VOLUME24HOUR);

  const priceFloor = Math.min.apply(null, priceArray);
  const priceCeiling = Math.max.apply(null, priceArray);

  const volumeFloor = Math.min.apply(null, volumeArray);
  const volumeCeiling = Math.max.apply(null, volumeArray);

  return {
    global: {
      useUTC: true,
      timezoneOffset: timezoneOffset,
    },
    lang: {
      rangeSelectorZoom: '',
    },
    chart: {
      backgroundColor: null,
      margin: [0, 46, 0, 0],
      spacing: [0, 0, 0, 0],
      height: 250,
      resetZoomButton: {
        theme: {
          display: 'none',
        },
      },
    },
    plotOptions: {
      line: {
        color: colors.blue,
        dataLabels: {
          enabled: false,
        },
        label: {
          enabled: false,
        },
        dataGrouping: {
          enabled: false,
        },
      },
      area: {
        allowPointSelect: false,
        softThreshold: true,
        dataGrouping: {
          enabled: true,
        },
        color: colors.blue,
        fillColor: {
          linearGradient: {
            x1: 1,
            y1: 0,
            x2: 1,
            y2: 1,
          },
          stops: colors.chart.blueGradient,
        },
        dataLabels: {
          enabled: true,
          backgroundColor: 'transparent',
          borderRadius: 1,
          padding: null,
          useHTML: true,
          allowOverlap: true,
          crop: true,
          style: {
            color: colors.chart.labelColor,
            fontSize: '10px',
            textOutline: '0px',
            fontWeight: 'normal',
          },
        },
      },
      column: {
        color: {
          linearGradient: {
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          },
          stops: colors.chart.column.blueGradient,
        },
        borderWidth: 0,
        groupPadding: 0.15,
        dataLabels: {
          enabled: true,
          backgroundColor: 'transparent',
          useHTML: true,
          padding: 15,
          formatter: function() {
            return numbersToSymbol(this.point.y);
          },
          style: {
            color: colors.chart.textColor,
            fontSize: '8px',
            textOutline: '0px',
            fontWeight: 'normal',
          },
          inside: true,
        },
      },
      series: {
        animation: false,
        lineWidth: 1,
        states: {
          hover: {
            enabled: false,
          },
        },
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Price',
        data: priceData,
        type: 'area',
        dataLabels: {
          formatter: function() {
            const first = this.series.data[0];
            const last = this.series.data[this.series.data.length - 1];

            if (
              this.point.category === first.category &&
              this.point.y === first.y
            ) {
              return (
                '<span class="Chart__label Chart__label--first">$' +
                this.point.y.toFixed(2) +
                '</span>'
              );
            }

            if (
              this.point.category === last.category &&
              this.point.y === last.y
            ) {
              return (
                '<span class="Chart__label Chart__label--last">$' +
                this.point.y.toFixed(2) +
                '</span>'
              );
            }
          },
        },
      },
      {
        name: 'Volume',
        type: 'column',
        data: volumeData,
        yAxis: 1,
      },
    ],
    yAxis: [
      {
        title: {
          text: '',
        },
        crosshair: {
          color: 'transparent',
        },
        floor: priceFloor,
        ceiling: priceCeiling,
        opposite: true,
        top: '15%',
        height: '76%',
        offset: 0,
        startOnTick: true,
        endOnTick: false,
        lineWidth: 1,
        lineColor: colors.gridLine,
        showLastLabel: true,
        showFirstLabel: false,
        maxPadding: 0,
        minPadding: 0,
        gridLineColor: colors.gridLine,
        gridLineWidth: 1,
        labels: {
          enabled: true,
          opposite: true,
          step: 1,
          style: {
            fontSize: '9px',
            color: colors.chart.textColor,
          },
          formatter: function() {
            return numbersToSymbol(this.value);
          },
          x: 9,
          y: 4,
        },
      },
      {
        title: {
          text: '',
        },
        crosshair: {
          color: 'transparent',
        },
        height: '18%',
        top: '73%',
        floor: volumeFloor,
        ceiling: volumeCeiling,
        opposite: true,
        offset: 0,
        startOnTick: true,
        endOnTick: false,
        lineWidth: 0,
        lineColor: colors.gridLine,
        showLastLabel: true,
        showFirstLabel: false,
        maxPadding: 0,
        minPadding: 0,
        gridLineColor: colors.gridLine,
        gridLineWidth: 1,
        labels: {
          enabled: true,
          opposite: true,
          step: 1,
          style: {
            fontSize: '9px',
            color: colors.chart.textColor,
          },
          formatter: function() {
            return numbersToSymbol(this.value);
          },
          x: 9,
          y: 4,
        },
      },
    ],
    xAxis: [
      {
        type: 'datatime',
        title: {
          text: '',
        },
        crosshair: {
          color: colors.chart.crossHair,
          dashStyle: 'shortdot',
        },
        tickLength: 0,
        offset: 0,
        lineWidth: 1,
        lineColor: colors.gridLine,
        // showLastLabel: false,
        // showFirstLabel: false,
        gridLineColor: colors.gridLine,
        gridLineWidth: 1,
        maxPadding: 0,
        minPadding: 0,
        labels: {
          enabled: true,
          format: '{value: %e.%m.%y}',
          x: 0,
          y: -8,
          step: 1,
          style: {
            fontSize: '8px',
            color: colors.chart.textColor,
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
      shared: true,
      useHTML: true,
      backgroundColor: 'rgba(255,255,255,0)',
      hideDelay: 1500,
      padding: 1,
      formatter: function() {
        const date = this.x;
        const cap = this.points[1].y;
        return `
            <div class='Chart__tooltip'>
              <div class='price'>
                  <span class='title'>price</span>
                  <span class='value'>$${this.points[0].y.toFixed(2)}</span>
              </div>
              <div class='cap'>
                  <span class='title'>volume</span>
                  <span class='value'>$${numbersToSymbol(cap)}</span>
              </div>
              <div class='date'>
                  <span class='title'>date</span>
                  <span class='value'>${convertTimestamp(date)}</span>
              </div>
            </div>
          `;
      },
    },
    title: {
      text: '',
    },
    subTitle: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    rangeSelector: {
      enabled: false,
      inputEnabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
  };
};

export { setConfig };
