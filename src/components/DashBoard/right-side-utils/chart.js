

export const chartState= {
    
    options: {
        chart: {
            width: 300,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true
             
        },
        labels: ["completed", "remaining"],
        fill: {
        type: 'gradient',
        },
        legend: {
            show: false
        },
        title: {
        text: 'Assessment completed'
        },
    }
};

export const modulesChartState= {
    
    options: {
        chart: {
            width: 300,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true
             
        },
        labels: ["completed", "remaining"],
        fill: {
        type: 'gradient',
        },
        legend: {
            show: false
        },
        title: {
        text: 'Modules completed'
        },
    }
};

