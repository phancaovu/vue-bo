window.onload = function () {
    var chart = klinecharts.init('chart')
    chart.createTechnicalIndicator('MA', false, {id: 'candle_pane'})
    var chartDataList = kLineDataList.map(function (data) {
        return {
            timestamp: new Date(data[0]).getTime(),
            open: +data[1],
            high: +data[2],
            low: +data[3],
            close: +data[4],
            volume: Math.ceil(+data[5]),
        }
    })
    chart.applyNewData(chartDataList)

}
