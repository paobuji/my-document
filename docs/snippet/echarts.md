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

## tooltip 按x轴显示
```js
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
},
legend: {
    orient: 'horizontal',
    left: 'left',
    top: '20px',
    right: '50%'
}
```

## 为什么echarts渲染series的时候出现-的情况?
> 知道为什么吗?因为版本不行,项目里用的是4.9的版本,官网里用的是5.4.3的版本,升级下版本就好了.

## 有用的例子
- [官网例子](https://echarts.apache.org/examples/zh/editor.html?c=multiple-y-axis)

## dataZoom
```js
dataZoom: [
		{
			show: true,
			realtime: true,
			start: 0,
			end: 100,
			xAxisIndex: [0, 1]
		},
		{
			type: 'inside',
			realtime: true,
			start: 0,
			end: 100,
			xAxisIndex: [0, 1]
		}
	]
```
> echarts可以通过dataZoom来实现的,通过将 start 设置为 0，将 end 设置为 100，您将确保 dataZoom 默认显示整个数据范围。这意味着用户一开始就能看到数据的最大范围。