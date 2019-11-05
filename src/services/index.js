export default class CompanyService{
    builds = [
            {
              "_id": "FG7pRodZNF",
              "createdAt": "2017-04-04T10:45:23.103Z",
              "updatedAt": "2017-04-04T11:17:23.210Z",
              "name": "Главный корпус",
              "readACL": [],
              "removeACL": [],
              "updateACL": [],
              "rooms": [
                {
                  "children": [
                    {
                      "id": "b1floor1room1",
                      "name": "101"
                    },
                    {
                      "name": "102",
                      "id": "b1floor1room2"
                    },
                    {
                      "id": "b1floor1room3",
                      "name": "103"
                    },
                    {
                      "id": "b1floor1room4",
                      "name": "104"
                    },
                    {
                      "id": "b1floor1room5",
                      "name": "Вахта"
                    }
                  ],
                  "id": "b1floor1",
                  "name": "Этаж 1"
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "id": "b1floor2leftroom1",
                          "name": "Приемная директора по общественным связям в федеральном регионе"
                        },
                        {
                          "id": "b1floor2leftroom2",
                          "name": "102"
                        },
                        {
                          "id": "b1floor2leftroom3",
                          "name": "103"
                        }
                      ],
                      "id": "b1floor2left",
                      "name": "Левое крыло"
                    },
                    {
                      "children": [
                        {
                          "id": "b1floor2rightroom1",
                          "name": "101"
                        },
                        {
                          "id": "b1floor2rightroom2",
                          "name": "102"
                        },
                        {
                          "id": "b1floor2rightroom3",
                          "name": "103"
                        }
                      ],
                      "id": "b1floor2right",
                      "name": "Правое крыло"
                    },
                    {
                      "name": "Подсобное помещение",
                      "id": "b1floor2roomx"
                    }
                  ],
                  "id": "b1floor2",
                  "name": "Этаж 2"
                }
              ]
            },
            {
              "_id": "CacR5AWhfr",
              "removeACL": [],
              "updateACL": [],
              "createdAt": "2017-04-04T11:14:40.421Z",
              "updatedAt": "2017-04-04T11:16:49.725Z",
              "name": "Офис на улице Линии Октябрьской железной дороги",
              "readACL": [],
              "rooms": [
                {
                  "name": "Главное помещение офиса",
                  "id": "b2room1"
                },
                {
                  "id": "b2room2",
                  "name": "Подсобное помещение"
                },
                {
                  "id": "b2room3",
                  "name": "Кабинет управляющего"
                },
                {
                  "id": "b2room4",
                  "name": "Складское помещение"
                }
              ]
            }
          ];
    equipment = [
        {
          "_id": "D2sXUESpcB",
          "createdAt": "2017-04-04T11:56:17.876Z",
          "updateACL": [],
          "count": 2,
          "updatedAt": "2017-04-27T22:20:37.091Z",
          "readACL": [],
          "removeACL": [],
          "name": "Системный блок",
          "room": "b2room1"
        },
        {
          "_id": "X5hvBq0Jaq",
          "createdAt": "2017-04-27T22:11:53.812Z",
          "updatedAt": "2017-04-27T22:11:53.812Z",
          "readACL": [],
          "update   ACL": [],
          "removeACL": [],
          "name": "Монитор",
          "count": 3
        },
        {
          "_id": "MMSu5X7IPJ",
          "updateACL": [],
          "removeACL": [],
          "name": "Монитор",
          "count": 3,
          "createdAt": "2017-04-27T22:12:33.470Z",
          "updatedAt": "2017-04-27T22:12:33.470Z",
          "readACL": []
        },
        {
          "_id": "uuUJKEbNiz",
          "count": 2,
          "createdAt": "2017-04-27T22:12:51.664Z",
          "updatedAt": "2017-04-27T22:12:51.664Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Монито"
        },
        {
          "_id": "zPi1Fnifhz",
          "count": 2,
          "createdAt": "2017-06-01T14:00:40.969Z",
          "updatedAt": "2017-06-01T14:00:40.969Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "test"
        },
        {
          "_id": "QgHkd1OfUi",
          "updateACL": [],
          "removeACL": [],
          "name": "test",
          "count": 1,
          "createdAt": "2017-06-01T14:01:41.335Z",
          "updatedAt": "2017-06-01T14:01:41.335Z",
          "readACL": []
        },
        {
          "_id": "Wqk0OVAiEb",
          "createdAt": "2017-07-01T15:36:30.136Z",
          "updatedAt": "2017-07-01T15:36:30.136Z",
          "readACL": [],
          "updateACL": [],
          "name": "Стол",
          "room": "",
          "count": 2,
          "removeACL": []
        },
        {
          "_id": "QTK3jksDqd",
          "count": 2,
          "createdAt": "2017-07-01T15:36:42.514Z",
          "updatedAt": "2017-07-01T15:36:42.514Z",
          "readACL": [],
          "updateACL": [],
          "room": "",
          "removeACL": [],
          "name": "Стол"
        },
        {
          "_id": "EUzs9QVrCE",
          "createdAt": "2018-04-16T01:41:24.259Z",
          "updatedAt": "2018-04-16T01:41:24.259Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Стул",
          "count": 3
        },
        {
          "_id": "Sx6OtxJTAb",
          "createdAt": "2018-04-16T01:44:26.849Z",
          "updatedAt": "2018-04-16T01:44:26.849Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Стул",
          "count": 3
        },
        {
          "_id": "F9vTqxheaF",
          "updateACL": [],
          "removeACL": [],
          "name": "Системный блок",
          "count": 1,
          "createdAt": "2018-04-16T01:44:53.276Z",
          "updatedAt": "2018-04-16T01:44:53.276Z",
          "readACL": []
        },
        {
          "_id": "NvOSNDWdYN",
          "name": "Клавиатура",
          "count": 1,
          "removeACL": [],
          "room": "b1floor2rightroom3",
          "createdAt": "2019-01-30T17:46:27.064Z",
          "updatedAt": "2019-03-30T21:44:10.780Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "XpK5p5bKjN",
          "createdAt": "2019-03-13T22:42:04.143Z",
          "updatedAt": "2019-03-13T22:42:04.143Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Компьютерное кресло 2",
          "room": "",
          "count": 2
        },
        {
          "_id": "VXZZTjCK4T",
          "updateACL": [],
          "removeACL": [],
          "updatedAt": "2019-03-15T10:05:41.020Z",
          "readACL": [],
          "name": "Ноутбук",
          "room": "b2room1",
          "count": 1,
          "createdAt": "2019-03-15T10:05:41.020Z"
        },
        {
          "_id": "qgBCG3Vk4q",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "test",
          "count": 3,
          "createdAt": "2019-03-30T21:37:36.428Z",
          "updatedAt": "2019-03-30T21:37:36.428Z"
        },
        {
          "_id": "UtwKE7eSFi",
          "updateACL": [],
          "removeACL": [],
          "name": "test",
          "count": 1,
          "createdAt": "2019-03-30T21:38:25.940Z",
          "updatedAt": "2019-03-30T21:38:25.940Z",
          "readACL": []
        },
        {
          "_id": "RYEfcr19Pt",
          "createdAt": "2019-03-30T21:39:25.213Z",
          "updatedAt": "2019-03-30T21:39:25.213Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "12",
          "count": 12
        },
        {
          "_id": "r9HcIhzolw",
          "removeACL": [],
          "name": "12",
          "count": 1,
          "createdAt": "2019-03-30T21:48:09.951Z",
          "updatedAt": "2019-03-30T21:48:09.951Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "hOaXkbr9Vl",
          "updateACL": [],
          "removeACL": [],
          "name": "32",
          "count": 2,
          "createdAt": "2019-03-30T21:48:28.555Z",
          "updatedAt": "2019-03-30T21:48:28.555Z",
          "readACL": []
        },
        {
          "_id": "k32hPvO6FQ",
          "name": "Системный блок",
          "room": "b1floor2rightroom3",
          "updateACL": [],
          "removeACL": [],
          "count": 2,
          "createdAt": "2019-08-26T19:20:57.453Z",
          "updatedAt": "2019-08-26T19:20:57.453Z",
          "readACL": []
        },
        {
          "_id": "04vIbAqR3K",
          "updatedAt": "2019-09-01T17:15:22.056Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "",
          "count": 0,
          "createdAt": "2019-09-01T17:15:22.056Z",
          "room": ""
        },
        {
          "_id": "2gWwsR5G42",
          "updatedAt": "2019-09-01T17:15:22.231Z",
          "readACL": [],
          "removeACL": [],
          "room": "",
          "createdAt": "2019-09-01T17:15:22.231Z",
          "name": "",
          "count": 0,
          "updateACL": []
        },
        {
          "_id": "cKrFUyy2NR",
          "createdAt": "2019-09-01T17:16:10.761Z",
          "updateACL": [],
          "removeACL": [],
          "name": "Телевизор",
          "room": "b2room4",
          "readACL": [],
          "count": 10,
          "updatedAt": "2019-09-01T17:16:10.761Z"
        },
        {
          "_id": "fBSc9pcOfB",
          "name": "Стул",
          "room": "b2room2",
          "count": 111,
          "createdAt": "2019-09-01T19:08:07.435Z",
          "updatedAt": "2019-09-01T19:08:07.435Z",
          "readACL": [],
          "removeACL": [],
          "updateACL": []
        },
        {
          "_id": "YWYgg1EFnC",
          "room": "b2room3",
          "updatedAt": "2019-09-01T19:08:30.780Z",
          "removeACL": [],
          "name": "Телевизор",
          "count": 3323,
          "createdAt": "2019-09-01T19:08:30.780Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "wznChvq03U",
          "removeACL": [],
          "count": 0,
          "updatedAt": "2019-09-02T11:53:09.868Z",
          "readACL": [],
          "createdAt": "2019-09-02T11:53:09.868Z",
          "updateACL": [],
          "name": "",
          "room": ""
        },
        {
          "_id": "9xcZCHVy7l",
          "removeACL": [],
          "name": "",
          "count": 0,
          "createdAt": "2019-09-02T11:53:22.568Z",
          "updatedAt": "2019-09-02T11:53:22.568Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "wSWkvtpCBw",
          "room": "",
          "count": 0,
          "updatedAt": "2019-09-02T11:56:19.676Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "",
          "createdAt": "2019-09-02T11:56:19.676Z"
        },
        {
          "_id": "jd5SRmcjy4",
          "updateACL": [],
          "removeACL": [],
          "name": "",
          "count": 0,
          "createdAt": "2019-09-02T12:03:03.697Z",
          "updatedAt": "2019-09-02T12:03:03.697Z",
          "readACL": []
        },
        {
          "_id": "crwHNmNL3A",
          "createdAt": "2019-09-02T12:03:22.441Z",
          "updatedAt": "2019-09-02T12:03:22.441Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "",
          "count": 0
        },
        {
          "_id": "4gSYYWeds4",
          "count": 0,
          "createdAt": "2019-09-02T12:05:45.571Z",
          "readACL": [],
          "updateACL": [],
          "name": "",
          "room": "",
          "updatedAt": "2019-09-02T12:05:45.571Z",
          "removeACL": []
        },
        {
          "_id": "tVYAyEhE2d",
          "createdAt": "2019-09-02T12:06:28.982Z",
          "updatedAt": "2019-09-02T12:06:28.982Z",
          "readACL": [],
          "updateACL": [],
          "room": "",
          "count": 0,
          "removeACL": [],
          "name": ""
        },
        {
          "_id": "0WmcdtHNN0",
          "name": "",
          "createdAt": "2019-09-02T12:21:11.990Z",
          "updateACL": [],
          "room": "",
          "count": 0,
          "updatedAt": "2019-09-02T12:21:11.990Z",
          "readACL": [],
          "removeACL": []
        },
        {
          "_id": "3gY8NQPt6i",
          "removeACL": [],
          "name": "",
          "count": 0,
          "createdAt": "2019-09-02T12:21:14.757Z",
          "updatedAt": "2019-09-02T12:21:14.757Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "hpWcOVZGVk",
          "name": "Табурет",
          "updateACL": [],
          "removeACL": [],
          "readACL": [],
          "room": "b1floor1room3",
          "count": 3223,
          "createdAt": "2019-09-02T12:58:51.183Z",
          "updatedAt": "2019-09-02T12:58:51.183Z"
        },
        {
          "_id": "U1nzUkAl3U",
          "count": 2342342,
          "createdAt": "2019-09-03T06:45:02.608Z",
          "updatedAt": "2019-09-03T06:45:02.608Z",
          "name": "443",
          "room": "234234234",
          "readACL": [],
          "updateACL": [],
          "removeACL": []
        },
        {
          "_id": "BvEUnkAfbG",
          "updatedAt": "2019-09-03T06:45:15.689Z",
          "updateACL": [],
          "name": "443",
          "room": "-----234234234",
          "count": 1,
          "removeACL": [],
          "createdAt": "2019-09-03T06:45:15.689Z",
          "readACL": []
        },
        {
          "_id": "gJ9OpmTQMl",
          "name": "Диван",
          "count": 2,
          "updatedAt": "2019-09-08T10:06:11.917Z",
          "updateACL": [],
          "removeACL": [],
          "room": "b2room1",
          "createdAt": "2019-09-08T10:06:11.917Z",
          "readACL": []
        },
        {
          "_id": "plLvdmbwEc",
          "count": 2,
          "createdAt": "2019-09-08T13:38:20.220Z",
          "updateACL": [],
          "readACL": [],
          "removeACL": [],
          "name": "Системный блок",
          "room": "b1floor2rightroom3",
          "updatedAt": "2019-09-08T13:38:20.220Z"
        },
        {
          "_id": "M1awXtYIxT",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Системный блок",
          "count": 2,
          "updatedAt": "2019-09-08T13:54:19.918Z",
          "room": "b1floor2rightroom3",
          "createdAt": "2019-09-08T13:54:19.918Z"
        },
        {
          "_id": "jmxqV8Ykwz",
          "readACL": [],
          "removeACL": [],
          "room": "b1floor2leftroom1",
          "createdAt": "2019-09-11T05:55:49.596Z",
          "updateACL": [],
          "name": "Стол",
          "count": 321,
          "updatedAt": "2019-09-11T05:55:49.596Z"
        },
        {
          "_id": "a5rP8LnGO8",
          "updatedAt": "2019-09-11T05:56:13.215Z",
          "name": "Стол",
          "count": 321,
          "updateACL": [],
          "removeACL": [],
          "room": "b1floor2leftro",
          "createdAt": "2019-09-11T05:56:13.215Z",
          "readACL": []
        },
        {
          "_id": "20vG5dlO6T",
          "count": 1,
          "updatedAt": "2019-09-11T06:58:20.850Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Монитор",
          "room": "b1floor2leftroom2",
          "createdAt": "2019-09-11T06:58:20.850Z"
        },
        {
          "_id": "V8gnuBmwIp",
          "count": 545454,
          "createdAt": "2019-09-11T09:08:06.458Z",
          "updatedAt": "2019-09-11T09:08:06.458Z",
          "name": "55454",
          "room": "555454",
          "readACL": [],
          "updateACL": [],
          "removeACL": []
        },
        {
          "_id": "KmvHWKrRKm",
          "room": "b1floor1rot5ye5trdue5",
          "count": 1,
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "1",
          "createdAt": "2019-09-11T10:22:00.950Z",
          "updatedAt": "2019-09-11T10:22:00.950Z"
        },
        {
          "_id": "vzx9TA3Iev",
          "updateACL": [],
          "count": 2,
          "updatedAt": "2019-11-03T08:44:55.040Z",
          "readACL": [],
          "removeACL": [],
          "name": "Системный блок",
          "room": "b1floor2rightroom3",
          "createdAt": "2019-11-03T08:44:55.040Z"
        },
        {
          "_id": "57vXfPWEF5",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "updatedAt": "2019-11-03T08:45:43.107Z",
          "room": "b1floor2rightroom2",
          "count": 2,
          "createdAt": "2019-11-03T08:45:43.107Z",
          "name": "Системный блок"
        },
        {
          "_id": "wSRKpq7NfK",
          "createdAt": "2019-11-03T08:48:05.447Z",
          "updatedAt": "2019-11-03T08:48:05.447Z",
          "removeACL": [],
          "count": 2,
          "room": "b1floor2rightroom2",
          "readACL": [],
          "updateACL": [],
          "name": "Системный блок"
        },
        {
          "_id": "HyiQ0VaxLa",
          "name": "Системный блок",
          "room": "b1floor2rightroom2",
          "updatedAt": "2019-11-03T08:49:52.136Z",
          "updateACL": [],
          "removeACL": [],
          "count": 2,
          "createdAt": "2019-11-03T08:49:52.136Z",
          "readACL": []
        },
        {
          "_id": "7IVaNRsr70",
          "room": "b1floor1room2",
          "createdAt": "2019-11-03T09:50:08.703Z",
          "updatedAt": "2019-11-03T09:50:08.703Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Пианино",
          "count": 1
        },
        {
          "_id": "h2r3UAauh1",
          "createdAt": "2019-11-03T10:16:14.586Z",
          "updatedAt": "2019-11-03T10:16:14.586Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Пианино",
          "count": 2
        },
        {
          "_id": "T2ujiodhEZ",
          "name": "1",
          "count": 1,
          "createdAt": "2019-11-03T10:17:08.226Z",
          "updatedAt": "2019-11-03T10:17:08.226Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": []
        },
        {
          "_id": "TlFWHG8TAT",
          "createdAt": "2019-11-03T10:18:03.954Z",
          "updatedAt": "2019-11-03T10:18:03.954Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Рояль",
          "count": 1
        },
        {
          "_id": "Z43NBm9uKZ",
          "readACL": [],
          "removeACL": [],
          "name": "Большой рояль",
          "room": "b1floor1room4",
          "count": 4,
          "createdAt": "2019-11-03T10:57:04.219Z",
          "updatedAt": "2019-11-04T10:45:45.246Z",
          "updateACL": []
        },
        {
          "_id": "BaSSXjfhiy",
          "name": "Рояль",
          "room": "b1floor1room3",
          "updatedAt": "2019-11-03T11:08:37.829Z",
          "removeACL": [],
          "count": 1,
          "createdAt": "2019-11-03T11:08:37.829Z",
          "readACL": [],
          "updateACL": []
        },
        {
          "_id": "61bJECMXgr",
          "name": "Монитор",
          "room": "b2room2",
          "count": 2,
          "createdAt": "2019-11-04T19:39:57.007Z",
          "updateACL": [],
          "removeACL": [],
          "updatedAt": "2019-11-04T19:39:57.007Z",
          "readACL": []
        },
        {
          "_id": "Tz8DNiRjUN",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "count": 1,
          "createdAt": "2019-11-04T19:55:13.366Z",
          "updatedAt": "2019-11-04T21:28:22.157Z",
          "name": "Не очень большой рояль",
          "room": "b1floor1room4"
        },
        {
          "_id": "hWA2nhZnsh",
          "updateACL": [],
          "room": "b1floor1room5",
          "createdAt": "2019-11-04T19:57:27.583Z",
          "updatedAt": "2019-11-05T09:45:37.909Z",
          "readACL": [],
          "removeACL": [],
          "name": "Стул",
          "count": 10000
        },
        {
          "_id": "djbo99WfGd",
          "createdAt": "2019-11-04T21:23:08.232Z",
          "updatedAt": "2019-11-04T21:39:18.903Z",
          "name": "Маленький рояль",
          "room": "b1floor1room4",
          "count": 3,
          "readACL": [],
          "updateACL": [],
          "removeACL": []
        },
        {
          "_id": "yG3RQCN1lK",
          "removeACL": [],
          "name": "Ноутбук",
          "room": "b1floor1room4",
          "count": 3,
          "readACL": [],
          "createdAt": "2019-11-04T21:28:44.411Z",
          "updatedAt": "2019-11-04T21:28:44.411Z",
          "updateACL": []
        },
        {
          "_id": "ivtFXYZghd",
          "readACL": [],
          "updateACL": [],
          "room": "b1floor1room5",
          "createdAt": "2019-11-05T09:25:41.922Z",
          "updatedAt": "2019-11-05T09:25:41.922Z",
          "removeACL": [],
          "name": "64564",
          "count": 456456456
        },
        {
          "_id": "zmkoevRgnj",
          "createdAt": "2019-11-05T09:45:51.808Z",
          "room": "b1floor1room3",
          "count": 44444,
          "updatedAt": "2019-11-05T09:45:51.808Z",
          "readACL": [],
          "updateACL": [],
          "removeACL": [],
          "name": "Стул"
        },
        {
          "_id": "exaGkhfCNe",
          "room": "b1floor1room1",
          "count": 555,
          "createdAt": "2019-11-05T09:46:52.075Z",
          "updatedAt": "2019-11-05T09:46:52.075Z",
          "readACL": [],
          "updateACL": [],
          "name": "Пианино",
          "removeACL": []
        },
        {
          "_id": "fv0LMrckRw",
          "name": "Пианино",
          "room": "b1floor1room2",
          "updatedAt": "2019-11-05T09:47:17.452Z",
          "removeACL": [],
          "count": 441,
          "createdAt": "2019-11-05T09:47:17.452Z",
          "readACL": [],
          "updateACL": []
        }
      ]
    getBuilds(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.builds);
                reject(new Error('ERROR!'))
            }, 500)
        })
    }
    getEquipment(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.equipment);
                reject(new Error('ERROR!'))
            }, 500)
        })
    }
}




