import { Component, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  value: number = 10;
  radioValue = 'Ista panoga';
  attachments = [
    { title: 'Klasifikacija dejavnosti' },
    { title: 'Slovarček ključnih pojmov' },
    { title: 'Povzetek metodologije' },
    { title: 'Opredelitev ocen v tabeli' },
    { title: 'Navedba priprave ocene' },
    { title: 'Pravni disclaimerji' },
  ];

  options_one = [
    { name: '< 2°C   (RCP 2.6)'},
    { name: '< 3°C   (RCP 3.6)'},
    { name: '< 4°C   (RCP 4.6)'},
    { name: '< 5°C   (RCP 5.6)'},    
  ];

  options_two = [
    { name: 'Fizična tvegan'},
    { name: 'Fizična tvega'},
    { name: 'Fizična tveg'},
    { name: 'Fizična tve'},    
  ];

  options_three = [
    { name: 'Poplava'},
    { name: 'Poplava'},
    { name: 'Poplava'},
    { name: 'Poplava'},    
  ];

  options_four = [
    { name: 'Avgust'},
    { name: 'Avgust'},
    { name: 'Avgust'},
    { name: 'Avgust'},    
  ];

  options_five = [
    { name: '2022'},
    { name: '2023'},
    { name: '2024'},
    { name: '2025'},    
  ];

  options_multiselect = [
    { name: 'Slovenija'},
    { name: 'Hrvaška'},
    { name: 'Bosna in Hercegovina'},    
    { name: 'Srbija'},
    { name: 'Črna Gora'},
    { name: 'Severna Makedonija'},
    { name: 'Kosovo (ne v SRB državi)'},
    { name: 'Albanija'},
  ];

  data = [
    {
      title: 'Poplave, priobalni pas',
      value1: { text: '15', value: 15 },
      value2: { text: 'zmerno tveganje', value: 15 },
      value3: { text: '32 %', value: 32 },
      value4: { text: 'nizko', value: 32 },
    },
    {
      title: 'Poplave, v notranjosti',
      value1: { text: '35', value: 35 },
      value2: { text: 'visoko tveganje', value: 15 },
      value3: { text: '55 %', value: 55 },
      value4: { text: 'zmerno', value: 32 },
    },
    {
      title: 'Ekstremni vremenski pojavi',
      value1: { text: '12', value: 12 },
      value2: { text: 'nizko tveganje', value: 15 },
      value3: { text: '21 %', value: 21 },
      value4: { text: 'zmerno', value: 32 },
    },
    {
      title: 'Ekstremna vročina',
      value1: { text: '63', value: 63 },
      value2: { text: 'zmerno tveganje', value: 15 },
      value3: { text: '13 %', value: 13 },
      value4: { text: 'visoko', value: 32 },
    },
    {
      title: 'Ekstremne padavine',
      value1: { text: '77', value: 77 },
      value2: { text: 'zmerno tveganje', value: 15 },
      value3: { text: '45 %', value: 45 },
      value4: { text: 'zmerno', value: 32 },
    },
    {
      title: 'Zemeljski plazovi',
      value1: { text: '45', value: 45 },
      value2: { text: 'nizko tveganje', value: 15 },
      value3: { text: '65 %', value: 65 },
      value4: { text: 'visoko', value: 32 },
    },
    {
      title: 'Suša',
      value1: { text: '19', value: 19 },
      value2: { text: 'zmerno tveganje', value: 15 },
      value3: { text: '88 %', value: 88 },
      value4: { text: 'visoko', value: 32 },
    },
    {
      title: 'Pomanjkanje vode',
      value1: { text: '88', value: 88 },
      value2: { text: 'visoko tveganje', value: 15 },
      value3: { text: '72 %', value: 72 },
      value4: { text: 'visoko', value: 32 },
    },
    {
      title: 'Gozdni požari',
      value1: { text: '70', value: 70 },
      value2: { text: 'zmerno tveganje', value: 15 },
      value3: { text: '53 %', value: 53 },
      value4: { text: 'zmerno', value: 32 },
    },
  ]

  bond = [
    {
      title: 'Blažitev podnebnih sprememb',
      significant_contribution: true,
      significant_damage: false,
    },
    {
      title: 'Prilagajanje podnebnim spremembam',
      significant_contribution: true,
      significant_damage: false,
    },
    {
      title: 'Prehod na krožno gospodarstvo',
      significant_contribution: false,
      significant_damage: true,
    },
    {
      title: 'Preprečevanje in nadzorovanje onesnaženja',
      significant_contribution: true,
      significant_damage: false,
    },
    {
      title: 'Varstvo in ohranjanje biotske raznovrstnosti in ekosistemov',
      significant_contribution: false,
      significant_damage: true,
    }
  ]

  data1 = [80,0,0,0];
  data2 = [0,75,0,0];
  data3 = [0,0,55,0];
  data4 = [0,0,0,65];

  highcharts = Highcharts;
    config:  Highcharts.Options = {
        chart: {
            type: "column",
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: [
                "Panoga A",
                "Slovenija",
                "Hrvaška",
                "Bosna",
            ],
        },
        yAxis: {
          labels: {
            formatter: function() {
                return this.value + '%';
            },
          },
          tickInterval: 10,
        },
        plotOptions: {
          series: {
          },
          column: {
            pointWidth: 40,
          }
      },
        series: [
            {
                name: "Panoga A",
                type: "column",
                
                data: this.data1,
                color: {
                  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                  stops: [
                      [0, '#B8F26C'],
                      [1, '#94C752']
                  ]
                }
            },
            {
                name: "Slovenija",
                type: "column",
                
                data: this.data2,
                color: {
                  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                  stops: [
                      [0, '#FEB671'],
                      [1, '#FC8008']
                  ]
                }
            },
            {
              name: "Hrvaška",
              type: "column",
              
              data: this.data3,
              color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#F6ED5B'],
                    [1, '#D9CD1E']
                ]
              }
          },
          {
              name: "Bosna",
              type: "column",
              
              data: this.data4,
              color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#2BADE0'],
                    [1, '#0081B4']
                ]
              }
          },
        ],
    };

    added(): void {
      this.config.series?.push( 
        {
          name: "Bosna 1",
          type: "column",
          
          data: [0,0,0,0,52],
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, '#2BADE0'],
                [1, '#0081B4']
            ]
          }
      },
      )
    }
}
