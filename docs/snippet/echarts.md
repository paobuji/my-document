# echarts图表
## echarts柱状图的自定义的tooltip
```js
options: {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            fontSize: 10,
            align: 'center',
            margin: 15,
            formatter: function(value) {
                // 自定义函数，省略超过6个字符的部分，后面加...
                return value.length > 6 ? value.substr(0, 6) + '...' : value;
            }
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(res) {
            const { name, marker, value } = res[0];
            return `${name}<br>${marker}${value}元`;
        }
    }
}
```
## echarts的问题
- 你知道echarts柱状图有个问题吗?就是一开始xAxis和series有数据的时候可以正常渲染,当下一次xAxis和series都置空的时候就渲染不正常了