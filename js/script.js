

const globalScaleFactor = 4;

const logo = {
    imageLogo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAAAbCAYAAAC+wykZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFzSURBVHhe7djRasMwDIXhrO//zlsN6dCNWp3KjtvD/8EolMiWOoREfo6e3/Nz6J412yfnNsuuGq+81+n/uKWW2/kJwBRNDpjrNvlYOR5/AJ7b0i9McsAcTQ6YG2tDfOOXydaL7G2h+hax8nyWp5qbqnNvpP4OUafGFflElXMyldw+uUY1dkUtL3NgkgPmaHLA3FgB1BWis37Mio0652fU2NV5qrG78qlQY1fcdWX+0ax8pOeZ5IA5mhwwN0Z9ZfRvWTPu4vOZTs7R6roq+cyKjd9n1LuiyjMZNVbNJ6PGqrlFlbviM5UaMy9zYJID5mhywNwY6ZVVobNmrIituDK2U8uK2MqZmU4+FWpsp8Yr84zUnDt3Zf7PZJID5mhywNxYDeKqkMlWiFnrR+X5LE81N1Xn3kj9HaJOjSvyiSrnZCq5dWqMsjMzs+6KOrW8nT+THDBHkwPmxkivrBAAvhSTHDBHkwPmaHLAHE0OmKPJAWvH8QfOXXo0hDC9DQAAAABJRU5ErkJggg=='
};

// RACKS

const rackShort = {
    name:"Short",
    width:23,
    imageRack:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAGCAIAAACnwpLJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVChTY9xhu4uBgcH9kOuRI0eADDRgY2MDJLFKAQFQdqfdbiADZArQCAgHK+Bu4/xa9R3KwQAQvYyHDx/+tn0ykM/lmYuVgUwCBd1aV+6qDkdTRpRb4C7HBBCXMgFZuLwNAUBF+BUAARPQMCgTB8CvAOhM7jZOAOxhQ9+JB06QAAAAAElFTkSuQmCC'
}

const rackMed = {
    name:"Med",
    width:42,
    imageRack:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAGCAIAAAA6z5tBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVChTY9xhu4uBgcH9kOuRI0eADFzAxsYGSOJXAwTEK9tptxvIAFkPtBvCwQ+42zi/Vn2HcnADIpVBLGVOX5p2Y2Ypo/w57gzrP79m4GGwqpoDSWopu7tvDZBBmu/hgYYHEK8MGEhMQBbBqIIAoGpiVBKpDAKYgK6AMgkBIlUSqQwYQtxtnABgQHQrcCybLgAAAABJRU5ErkJggg=='
}

const rackLong = {
    name:"Long",
    width:67,
    imageRack:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAGCAIAAAAXPbT7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACMSURBVDhPY9xhu4uBgcH9kOuRI0eADILAxsYGSBKpGAjooH6n3W4gA+QToDcgHCIBdxvn16rvUA4RgNbqIe5nTl+admNmKaP8Oe4M6z+/ZhDDYFU1B5KDR/3dfWuADDLjBB6nxAA6qAfGIROQRXyihACgNpK00Fo9BDABPQRlEg1I1UJr9cAI5G7jBADN06XIGTO3oAAAAABJRU5ErkJggg=='
}



const racks = [rackShort, rackMed, rackLong];

// RACK ITEMS

const rackItemLongboard = {
    name:"Longboard",
    overAddition:-34,
    downAddition:-4,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAHCAIAAAD7z+a2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABrSURBVDhPY9xhu4sBBi4cTgSSBrbzIdzhDZigNMzbyIzhDVDiHAjg3h72MY/ucyCgiudd17+BsqgHdgeKQFnUADjjHAJK33RDWUMBkBQ0CJ/TIpYGFUALF8a/b5ZBmcQB6iY5KgLSYo6BAQCcbiXr3+nkYAAAAABJRU5ErkJggg=='
}

const rackItemShortboard = {
    name:"Shortboard",
    overAddition:-14,
    downAddition:-2,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAECAIAAAB6GUoNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABCSURBVChTY9xhu4uB7uDC4UQgaWA7H8Il3xGu699AWaSA3YEiyC6AsHE6gjw7SALdIqVAEugaxr9vlkGEBgwwMAAAADYWlcQikcUAAAAASUVORK5CYII='
}

const rackItemLuggage = {
    name:"Luggage",
    overAddition:5,
    downAddition:-13,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAIAAACwQdIgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACxSURBVChTY9xhu4sBDB7/KQeSvx89hXBZ5aSBpCxLJ4TLBKEgioDgq7sYBEG4cHGoOjjg3vkKgqB8GGDsTtKBMvECkHk3r0F1wxlAgCaIbi8uwJhiAXUyfsDyy9MPSP2+fQ9IsqoqgQWhAFkQai+EA5HQfXgCzobrRLgPWSmm8YyRMU5QJl7AOE2aKH8wrgzxfXv8pLClOVQAA0BkUcIPKARlobKBAGQelIkhh7CEgQEAylFJV4j9aPgAAAAASUVORK5CYII='
}

const rackItemRedWagon = {
    name:"RedWagon",
    overAddition:1,
    downAddition:-12,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAIAAABPZMCZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAChSURBVDhPY9xhu4sBBjwOuyFziQFMUJoszUCA0E8egOonz3IgoIb9ZFsOBJTazwjEHQzSEA4QpMhwQlkYYM6T71AWEgDpBzr+wuFEZJ3Cj28DybeyqkAGhIRwwZJQADTOwHY+KP0A/Y/sBOIBVD+QBTTC2NgYyGjlagdL4QPV3yqBJEQlNPyAms+AAUQODwAqQFZJcfjDYx7ZVfgBQiUDAwDhI0YMlPv7EAAAAABJRU5ErkJggg=='
}

const rackItemRoadBike = {
    name:"RoadBike",
    overAddition:-1,
    downAddition:-14,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAQCAIAAABlb+OGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADVSURBVDhPnZPBDcIwEAQT+NEFNVjiR2GIN6IHuuCHKIEmKAKJHxKL1lqbOHe2M48kdtbjyyUZb/v70M/xfThtznEwx8+LEAd+VDHgJ8EYQmCIy6oLHuvn7rONA5tVPDcYu0h9gBe1cLaKSraa8/fe6PUfU3tfXxccc1feySVeBJwk7FCn/nbBYlV7ydTLWpwFgBWx2DKJWwjM1IsFLXZgqYHZh0a7pa7017drnvac6fdQJoTU3EnXvBDd3wMUtKjGUipSvdYTWeR/AclnlnsJXSTtMQxfb+KPk6vtjV8AAAAASUVORK5CYII='
}

const rackItemTree = {
    name:"Tree",
    overAddition:-4,
    downAddition:-12,
    imageRackItem:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAARCAIAAADGwLIbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGRSURBVEhLtZU9TsNQEITtVJyBgpIyShGJKhUVN+AYdDkDEgUH4ABIXAAhcYNUlJQUnIEKMfZn1uP1jxxkRtbLvP2d7HtOyufdS1Fjv7qGgNvvx4bVkDdZlsWq+ayxXW8bZrJEnjZ38P9DRweQGgSpvUSEOJRhjO1S6Og4vB3oKoIlIXozoQWltDrGjn9MkyDRkuLj+bOy9p4KVFF1evtsBueUAtx77KUeuB9CNIjSQXABDwDy8sScZiLrUAkvTVdWSGoMIsyVaatrNPNdq86l3D3cv75r83nyMd0Jl8ek+MEt6/RJVfOQiJvLcz2nX2dYAyrRMBPBVsS9cLqGnRSMnFS89gnl1cWmofU8IErzrhSCVO5f9MNqcwfEEAC07c+m875wlqTFimsCLsJTJop4CpryPcXnmcohjRUE94rAwwRcMrpdRj0YOan8PycHEWklRvBt8D6Ba/VcYey2tvOINGqxZYUEF9h6D/eC8Ko3j/jgJRU684jSqYfQt4zBI8e+fR8Dv+tC1PJCeOeXPgJF8QNL+CxETAoReAAAAABJRU5ErkJggg=='
}

const rackItems = [rackItemLongboard, rackItemShortboard, rackItemLuggage, rackItemRedWagon, rackItemRoadBike, rackItemTree];

// CARS

const bodybuggle = {
    name:"buggle",
    size:128,
    CarPositionOver:11,
    CarPositionDown:59,
    SecondaryPositionOver: 50,
    SecondaryPositionDown: 50,
    ArchPositionOver:16,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:55,
    RackOptions:[rackShort],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAjCAIAAAARyBMdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASmSURBVGhDzZo9aBRBFMcvh4X5qBQrwdYmoKCiwiWiIMbCSiRNChtJYRkbo0UEYxBMKRJsbC1FIVELNXegFoJCQOyCIAiCVY7Y6f/2Pz5eZr9mdvYjf5b1zezMm5nfvJmb3Ti0NvGqtfu0sX7WWEm68fSPsZQeTO81VqTxyTfGqkW7hWMiuERe7gJZelh7+J451al5jkIQY5aRu4th6FILJasL0oY5EqKmcObJN2O1Wu+uHtZJLTzCnRBP9j5EebYmfhw11n+xfBU0m+cIiIB199Z2f37b5OZpaXQf7kAJLoCYUXH03vDtxWFCF1URmE1yFIg3+78xYHeOkKB02fukMJNQ6YHZNv/WLkB8fvELIZosH3nVQmGrPOYPl2zN4WqMY/1C5FrBC5RT10+XQrMZjtL1YsEYIqDsHvxsEpFKCcwGOLLTWNRMQr6bY6DQFlBqmuEom4lH9Pvt6jH8Rpt0IVm/wl6KT1sgymo5YvfhhS7KhXz8vPR6vU6nw2IhQiwby1/oBn+4qRCU5Zx7QMpYecJqwoEOBoIRHF9OvoZdYF2jysfOKYwcDovtCfDAnlxaPQI/zKQKHDCD4lHCzaQdxFMxlyRCkpm+0jGIlxYkeZmsTElh/bYDcBKYMAoEZpF4zAaHxWKsSBm7mF5TIis00sTRoq0Cu6TVQ4hO4BO/fuIQSfeo9OCYhi/eLawUY8WEwSfi85KwRtMZbVlynCE9N+4onTgiyKUTIRSs2aZBZQwysUWWF47ZjHL7rKszLHxR5nDkNuEIMXcwmqOvdNQLO3LMbtdRGl8cJe5sJe11PoujhCEd6ZMz5EskkKMl6VJZDvU8wWcaShiJ4ZnKUUMkQTilO5FXIKCuV/lcsWO+HIVXfDiUDhc6txpKDMlkjoT4d3oMRxOcVPRensGC3RLoUZ4RHzXOkRAzhqPJinM2BGPr1yzuiyNLg8c7lcBRQ0QSx13c3REITT1CZJYLkQIXd44aYm5nhJ34Z/U0lDZHDTFO0JouYyVFn9UJ5riP2UW+PgHCgugyHJkqb45zrT2EGCeYdgKwPjizsEZZBUdIBumr3OFot5yAuYVx2MdfjOEe52i/FyYGPFpFkxnHqPjXZtwdd9UaBBAYAtlBLsNh9IkQBMsLG/fvbF359NNk7ZTNkfV1MLJV2hmy2o6jbEqMJhgyogLDQXhK9bEDKzS0BhwvrJ9ngsKiljrw5dIqlYhS51SkjCbwyJrLtIN0XLLIZI2vTj2joV+RSa/NzySz36/hjseoIx9C0Anx5Sjf8mUpd7Y4qe4QKV2eTQAlEMEGMV4IO6Bsdzodnm+QpXuT27M06batkCzsM1uMl4qcwy09oxVpaPPr5eihEQC2CXEzEnMh1iwluKxBihEuuuJdBqlltVWsaQsCWyEuil/1h7rdblRgIH4fpkIgWl/YSmRXQNgfZVkUG1T8vxHov5FxQZvzI3fJmZmZ6NFAK4ceG8tf8fOXsWqX1Y3CwUGUWvqPdP35bXPugYUrhJ0ldFrwxVdc/Qqcy/gEkBgvJO33mbJkTSBQnlg+ZxJ1aWT/I9zRNCGG7FS5qokjFPjX6mKSHb9SiK1W6x/6jEwfee8XAgAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAOCAIAAACwxuV7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC5SURBVFhH7ZaNCYAgEEa1QXKSxolmihaJxmmSBMX0VPw5oVN6BF2gct/LSH4uF4uz3auuXPb50FVX1MWJOootZ+hLEybOpO8uyRUlOWOIgIwTcJQfvgtN+DjQUWls4pqaxAl/a0UQ14THcTR82hx8Ca+jX1AMLoTQJQKy54DqF28ngo6K0poO6DvK6RAINVMS5+wklDVV9AY0KbD/tTF2kAEMlo/ywu4jie/+K3FNOlGL2BMbOBocxh45DFe1h+5b2gAAAABJRU5ErkJggg=='
};

const body3cube = {
    name:"3cube",
    size:128,
    CarPositionOver:11,
    CarPositionDown:62,
    ArchPositionOver:19,
    ArchPositionDown:83,
    FrontWheelOver:30,
    BackWheelOver:94,
    RoofRefOver:58,
    RoofRefDown:58,
    RackOptions:[rackShort, rackMed],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAgCAIAAACXXGGzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7Zm9axRBGIf3rAzpbP0DRBAMaKFwFz9A4hViaWsvdmlMLKM2WsnV2lpbJFHwIwaCoKAgiH+A2InNEQvh/MXf8N6b2fncvd3bwofl8u7ezOzMs/O1l97W4EXRAb7sXDJRDqvPfpuoNg9vHDVRUZxafm2iZObsUfTN0Eh96DTL5tw8Lt5feN8/h6Bs8MLTbyY6zNubJ0zkITdjOD1sPh9+vjP+yYth5uMREsdr+1dvnWdLAnVFShMVxd17C2Lk3fFPDFAOAx8oITcjbzr4vhStnjAHj5SIAB63RntyGgUp0YXRf+EiMQsRlVkZkYsqUzweMX/bQkvklXSy3GmqZUQueIf9B4vHzCU/rXq0JKIz/rucTQUvHNfoXzxNRG4UVdmeR0uizFPtUPmZIaPMrQHa8AiDIpHIPGVd7zLhLtm4R5oSWbJGVwBFWUE6dfJyljQnHpr1aL2lUOLG+lRrm3B3jSkyVyVqy1ko0CUb9Ahr2KNgw4F64+C0SHjFnMRgYhyySkiZOHglQDkZNk8p2SUNk7FL+lT2au4fxY5+PxXkXcUay9c2T5vIBXM5h7+Mr/K31tAL1yf8LdFpdJWc28mIx5StkyZlaes4zuenQRvLq7/tUWY0vFri0+kleicNSkhPj8TsBVbXAJyh+v3+7u4uBrizQwnl7CSr5hprAKH8ydez268em3PtkQZ9NegCtBDo8mG5AtqIoviA5RPXoxetZwyV+KRN43Fl58qj4g/6IDP/JwrMDreuI1gaPMHn1CPGC9ZBxD6VyGkiF282z5ioKFAUA+s9DGMTA9OcxJBCNFkFOksAViHViHgUiZyP0vFVjiPCnHSDctM47UrMQHB2C7dHbJHCnbEyM/eISaoLkzhHJ1Qe8gi4xQm0GTmtZSuwpgtNeKwzj+u1KKX+PugRcDtpewTlcsWg818W4QfQEY+ir9yEaAdyYnmcvhf6fvWlRNze938fZMSBZFJ014BE1t/ZBKm/OU+gnNh4XLl8GwdjnYixz6CGj6EFlbmTIyWaEz/pXcGZxnjEZrJ38oP0bZbIDBSUgqh03mkuoCacBFNI6Qq+b6fjGu+M5UTpEomkb0ilXiWisA5ZTdBdQQ5+BXRMpPCDdQabR55wC8mY5HoE+qcNdHDce1brDCRyUEfL1A2u2QQnG+vm91NuNreXX/Ymkwkiaxd6cfgRnxVqQPTSP0OPQqBMbRBUa0LYo0jUHPRH/k4pjEajH79WEVT2CCyVjOsg4rTEaMn1u4IPbXO8tj/dP2pYSqc8VmAm9XdSLtntsT6oh7P/twYm+joec2nKI4gOjUZpU2JRFH8BSmCT1otiw74AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAMCAIAAABp6O2CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC4SURBVEhL5ZbhCYAgEEa1QXKSxolmihaJxmmSNCXtlLxTqoveny4Q/e5pmJy7RUQMa++qgLGdXPUF4hau80MRSQUhzHUU52/ccyc7iwYz5i1q8nsR+A45u8CQzO9EUHtj6IIUKR58+jR+BXBhRJRtL6tDUR+m6kSwclFAmN9cn+E75nakjr8bsB/ZSMn8UillKw2+q2MubiKQeYA7jT8R1JaYuCiwYAFdp3+xkQCvjxkB61qqVhdiAzrQWGkpXv5LAAAAAElFTkSuQmCC'
};

const body039 = {
    name:"039",
    size:128,
    CarPositionOver:4,
    CarPositionDown:60,
    ArchPositionOver:16,
    ArchPositionDown:79,
    FrontWheelOver:28,
    BackWheelOver:94,
    RoofRefOver:0,
    RoofRefDown:0,
    RackOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATlSURBVGhDzZk9aBRBGIbPVGqsJIJYqE0UMaCioAHjD1hoIYgWNilECCnSBFT8LSzUCFoEJIXYWByohTYWRgv/ENTCQhBE0kjAymBl1NJ3710/v5uZnZvdub3dh2Uz+zc788x3szOTJbMjzxr15tPr/WmqndMP/qQpL7Mzb9NU1dTadf+1Ze9370IiUKvN3rtfsD+/+IOH1VJf1xCN/ci3rdhTWQyvTmzEvlr1NXVN0ZeuJntoEtd+TVP9K9NUOxRNKtRdR9da9M/v49PT04sXfreuBDE+P5amGo2BgQE8PjMzkx43GveP3GGi99L70r+1wRDdOpcbKGYCopk48e0kNqYJgz3rp1AG9Yprp+jwuGZEU/TCwgL2zWZzcnLy6vKp5PI/Lv46z8TIts3TB9KQD+ymYqiRa/0x3H5jX+tcGpjFXEM0Ev5nZzc2RTcotWOpi2un6MHBwYmJifDOWrsOb6TTi+ew37Bm9aPRBzxDuh7p1ffXByeGscGyLZqJXEhPDUZHR6W78HCz/zoTR5vHmSDo0Lvbp1cc17CM8GGVbh5fijkLXVM0ghpzmaE9L5JbA9BmEddwDfVGZ20gj6xYdRt7PTq0kUjXGFHPhvn6+RgPwe216cinAtfwm6ZaSAUOP9mC/b0duySi6ZrpEOMiDqI5zsMIb93ZIR3sWcC1iGaRPN6d0jXiWkSDslw7FzE8U22WHrofH/qoK4lgT1PtdJy1d/QVia1bxzLRokFu10ZUAn8j56otzWZ5FO+ByyMoWHmuia67s9/Q+FxjbCCzZJ4RCocbcD4rD+IqQptpECjL0wxZRRUCW06DPPVTfAWL7Rm0ZLqWaUUZoZFVf1Yg18+/DJUh6PfiFTgs6Jqi5btEihXacFFSzfVvuXBwIBN+n0HhciKTLN0O13paEWlKHi9JsYAaFvsdsGDSVOLagLfh2ZCKZP13ooNrDzqUbGJ6HkMHyNVU9uM2OkNPRfzqDfheXnLqdrsOFO3pmzCkt3WHWCC55PrJajmt2FkRmS4axrPKJi+SGwzjba6R+5WLyQKC4VrnIkX0iCYsa0yAR4Ki8u1S5p/fxz+ceanP+Gth63aKFj+nLg8xQZ4+v5WmWvxfD2G+GHjgk4iHs8IBoHwdRYOQe8pDhy2AZXs1vGMJ5QYZhtpaAM0YooExF0niWlqP2POf4eHkmbm5Oez9yws2yLzC0AaQLpZ1UIeHgh3dwAhw5inq1m96KLVedzZpA8xu+sbnx3CHbLzspNjCG5AQM2KtB9hvzCsahNxsxBNMQjE3noHntjVVtIZTNyMa5A1qgILqsvZMN16EzQigyLfrCW0B+jhzh2VsPOVEdMdgfKlKgpaRoGVZ5GMHAnIFNen4iFEp+tRK4Tnpr401XBv2dwWCWtC9NotVRieuKyzhrF3zhgKuAXttFBufR91Zy0t5aeebdzwExn+Fkj5EJOJu2Ximi+gy8ZAbT8ZgZKULH7JyHYi0kPFV1MZwyVjY0KTja4a2Xi/X8H8lMXENujIgyWobnTPucQY19rhULKiJhDYPAcsTmKc5l8HeNtIV18Be+3aSJVRjD5b9SPcY71qTK7c210B0y/9YSbxooP8f2DOMj1Ck65jHTdfANtIV0aCLrmVQYeP5WcSYisfhWtBquqLb/g32mPq6LpVSvVfr1E2j8Redeuth7p+uNwAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAPCAIAAADmlz9WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADUSURBVFhH3ZdhDoIwDIUHB2En8TjGMxkvYjyOJ7G4WrVuoyuLlH5/KEm79L0WAsP1cAs5TvcjRj+cpwtGeyArpC4hb0rFkcQufKmrqEjgpizaQRj3RSKkJGHE6xO5I0BT8p8R9lZK+zLFB+tH+zZFMXkoUVTZx9um6EaL0Qs0xeXA1Th8pyhgO9HBFDtb1quTPpvi7OmbP966SLLwLceELLb0mQ/JdDvEGFNEyOWxQzHaiFZHEtmqkRU3advciBLyxigTAorx3ycZphPJzAZ051ghhAdIaVn/XPVyBQAAAABJRU5ErkJggg=='
};

const body005 = {
    name:"005",
    size:128,
    CarPositionOver:22,
    CarPositionDown:61,
    ArchPositionOver:26,
    ArchPositionDown:85,
    FrontWheelOver:34,
    BackWheelOver:89,
    RoofRefOver:57,
    RoofRefDown:57,
    RackOptions:[rackShort],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAhCAIAAADI5hvkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOWSURBVGhD3ZkxaBRBFIbvUnkmhQgWkkI7FQKmVPQUbdTCysKUwVbsAiEmYOMZhbRX2GhKLawsDDaih4idQkDstAh2YhO19N/7h3fvZmZnZ/bmtvDjuLybm5mdb97M7t6mvdN93WqE3XeXTKRYef7XRK3W1s0DJlLoCoB1Fi684ccJmbq862z5CBAr+8oi1xRMV372Qefj+TOMRezi9lcGFm+XT+CdYi+vfR6WeWA1MPkUTFFezEV7MP+JwUavw4CIj1A2QcTyB/WmYFryMO/uLcpKhvb+3T/8ymJz9jDe6QNnEUO8tv+TsQWaWPOFA9XwnzF/s0JzjJ7mO/0PLPcCQ7ysVKNJmTlw6+NA3hNqmPzyYo7kwCFsXpss/pnlLXNTGkEgz2V4/a/ePms+RJBTvswc5SYKgn1r7eRKtL8E8f7Z5L3m67/XGJSd7TTIm5y9Y0Dn7J/aOG6qfx55MZePMrIk4M9OKnevt/NU/wzy2txat72DmyZKJ+bsNXfksYl8VPZQ5zrv7ZRJg/yx1QWWfH+0y4CEz3+SKHbC4Pqr0yy0wLHw7p1uwL0jmyhw/U+WD0wnjifmQMu7m5kCLiIv6LZlrYBuiCasGfavlndtvSNgHr59ucGPgPIydLeVNSMBMZektqjs9a+Qp3nMsGQRIvnHT71gjKMmKWVHBuD198tLtlOHzikA3K6RzfmDp9/v4/3Hr5VhWYG7n+shO8I673jkA9kWN5faA2VyrJ5zaRORB9p/TJ63YtbvUAyOQRjWj6xMKg/hTUAS7JmTS3+uMt50jcl7z+STj2ASkmbTAiMXebxr/zH5yFN6Y+iFOjl6CoDIF3d4XO34Tr+KWv8jMH/fXWJcZJ73p/yssZZckzOSmnkZauUgHy6dZLDYfTpa9lYzdOd9iohrWAOzEC+PmiYaEnOJpb9fHt2hC5i7Dxj4vM17gLy7NBIc1DvIcIZEvtjzVy7fGRYWcCJxM+R9tIJCvLgirE3RPF5zwBEGhrd6b+7c4BmC9mAwwJ+NXgd5o7m3Rwv9yFXImPzKrsrMBeYfgbUEeJ0no9/zNI8EB25+kQuV5oD5D5jjajfDK979dfOYKSbtZcjamZBw2mPMCarp8SCWf5aMrvPin2SexdMll7kGrWS0kKUvMMteF8Xj+udKvosWSIKtjh7a4mt7/gnLQVvf26finvb0+AIJLCNGLzXz2nZ575aJhmSQb5Iaa76UVusfNNmDNC5cKp4AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAJCAIAAADvgKZUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACFSURBVEhLY9xhu4sBCaQ/SoWyYGCm3Gwoa9AAgo5E+ApTKTIYPH7D5U5kFzJBKPxeAgKCCugD8DgDWQrqK2LAgHuM+KAH+WrAnUsMINKREGVMw8lLcMAoLy8PpPAUBsgmDlSZQZKvgI5EL9mxggH3GNwB+G2HKyPKV0BApLm0ACRbzcAAAF7oPE/A6wrPAAAAAElFTkSuQmCC'
};

const body653 = {
    name:"653",
    size:128,
    CarPositionOver:8,
    CarPositionDown:63,
    ArchPositionOver:19,
    ArchPositionDown:82,
    FrontWheelOver:31,
    BackWheelOver:92,
    RoofRefOver:60,
    RoofRefDown:59,
    RackOptions:[rackShort],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAfCAIAAABmhQT2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPISURBVGhD1Zk/axRBGMZzgYB6gmhh4wdQQTBdFHKKgsQUYpmUFnZip6DR0j8Bba21NLWFpwjBuwMVxD9goR/A1sojNqJP7hlfXmdmZ2d3Z/c2P4ZlZtmdfec378xuLp1+7+VM+zh/5aSpKR6u7DK1OI6d2jS1pmijze693e8WT1zb+GXaxbG8N6a1pTZxdIX2D37ozs2ahkPv+7ypKRrW2jqbUDle22KFgoaHPuHIkwGwOfBK4pUb2VVp2mVTVAKxEzl42u8/emPaE2RKCDpEbziJeh1OMxdO81gqcaw+YPQAvzpnAU6i4HHUmpC22NQqiaWgCuIUeSoG63DaCpuWyi+DM0U/hkj4LjyCQpH4NTmdvk1XJY4Lo7f6ZCooNOwUATCGEnSm+BbiYLS1pcE5HEejkZy0XAfAlfioivwGwsXydtJbyu27xu/rS4eR6UW/qKaZmxgPNzIWqqxC5Af/nvV9pjYBMWAaWC48P86Tp598Q29Fk7SJ3PTGhFi5zVEBor9zy+QghqfzBeSmp841YN3uoi/OAiEhQ1GJT9LENrMm080ahPhs+bNpTGDoXsJ2YtSUA0Jx5KpHJddpSZv3uwdMrQgBXwIHkIvuikMl1gwVxRthfJLm2Jx7sP/jwvbMM0rZVjTe3SpXiky4F2+f1YmcKsGVG07SkE28FvB6xd5s2v9IMlSGldZaYHossp4b0G2Ztf6EJZk2qbKOLQkRM8dTqYRELh3vOiW5or3BeOXKU1yhIZudjZ+mkRTaTKVSv6CKzn1AsRueNkuhsTZjEjNrUQQShNS3xiv26ZVr9Smj9gr127Q+3yzQ483xD9PwgTd+eNGlVQlERMKetVyvU4wx3yZ/WPTazPWo8TpFDwmXuYaDxwaaNZGSVmECeWCxvnoEx/neYzaBbRMqRTzPCIVUElcoOokPtxABmxxRZPDhhWVNyXL/4o2nXyVDbZtY4/jLP4lKwt99hfpsAgh1bZaLXDu1DALvEOD0v189ls5eXXx1GX8vu/eXJmFXJSinEuAuRs4j9LFADgp2QpY/K3tZUEcibttE+rB0jr6//nv1xeaAvbCwXi6mHY13yHid6IKPSBbUx2tbneFwaC6cgLM4cg/Cu4I2QRWb1qrxLpNU6P6rJ4FELh4AzugmkKfMwig2Sha0mcDwKCqTDN56/I4DElhQD4zFfgthNkxNecT9FXOTFYlGeq4DPdqKuQm0EBLo0/O96d4Pktj0ktCsmzXVbRbCYxNY468YE3uTn9brRv6307BK4LcJtNDqYYXTsyaatjkz8xc3tYYajxI5OwAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAOCAIAAAAkIEyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC4SURBVEhL5ZfbDYAgDADRQWQSxzHOZFzEOI6TiClRLKAUUR5eTOwH1nKUEKqpnZlGv3QyMjE0o4wKAou4VqBSmI6TCHcLQFIuHIu31XyIoFoAUnDhUbledi3f2eK3fvpXUoRfuqxBU37aEXENBvx79lsjFL8WoTbU3ztCuIBnOz7RTrs9EanjX0Itg1SDsX7cES4Z0RiU93uoK7GPF8EeV5xziASkjNHnD1At2DBfutJEVx/KAmNsBcAOSkUnmRCTAAAAAElFTkSuQmCC'
};

const bodybrix = {
    name:"brix",
    size:128,
    CarPositionOver:9,
    CarPositionDown:55,
    ArchPositionOver:15,
    ArchPositionDown:85,
    FrontWheelOver:35,
    BackWheelOver:97,
    RoofRefOver:34,
    RoofRefDown:52,
    RackOptions:[rackShort, rackMed, rackLong],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAnCAIAAACKWVELAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP3SURBVGhD7Zo/aBRBFMb3YqEkqYJp7EUEweIstFCjjVoIgoXa2YiF2GkRrOMV2qYINlqI2gkWBhv/NFGIhSCI2NgLKcRIOv28793kZWZubnYys5dL/HFs3uzNvnnz7Zs/t5vW4vFXVYOcvXGMxv1Lew6deE07QK36tSp/fndKrKqKiSRMuo46DsOtZ2tiRYDelqsfWRnVxPIRr2+KjlCwVv9HGi10QNbaOnYmpsTakcyuroi1kXo6mgmoLryrOotPPvz69uoBGO17MzxDPt5+I5bzVRh9IQlfzvreOq4rAzrizcoaOlLEcHBz4x2xqurO71mxuiA4PWdRR3jTl2wGNGfdg2TPriuxer1wpYzVESKi579+XGcxIUQEd2X5vdYR3nKJSNDE5PRCltujpbz8/BoN8PTCAxwX55dYNIzJ3yAUkXbenm9ZdDeh3bcezE13rzJYRzMnZk+fLY41nPf3QNHdrgzQkSKWGIMjAaZCrpBAErKXkhaD89GM6CzQG45crPOiF4fNg7x5cuSoFKpKsrELimaYkpCO7ojG7IvPzklM3VN3ltRS9tWxxIg200qJZCxEICU1fh2NiCwWAsMQ2S2FTaNd5fIMJ9irSUFNkYBnzMLt2T9qEZGM3XMb+LNr7O7uORi1YuXk5c6M3mnbwKvCdYjenJKYqwxaL4JMdH1amD25raMWkR02CxYwSe62atGveeqo1dT+LcJ9INbluMS9VUWhlBt0NBNnuVBcHbMzFB3982OTcYw6HDTr+aiTkUaAZKG3Xz4CpKStI0WMjCNGcZeh6JgWagxoa11Hk4wge5Nm0f/ZWtu39xFtovcDk9MLYo0a518eFh07E1PmHkJHfEE7Oy/OfUpwXmvhTmvCS0y7ZF1HHCll84MuLw00YYEWZb1uuOHtR+g5RTlwA8UafdCX2dUV0VGPhf+5mYA/Hwvly3ZKQwvPOgN0ekYyUCPtMMF/PEWdu6A5jGvR8czpmzjOfHjMCGJCoXAx1dw6Rbsa6dzsk7zE73jA4vySrSOOCGJgKFpE2i4BD0PXESJimymFPmATGqmmrSNoHVzGMUZHVHBf43rRP5bIcHVEhX7/XmKhf54EgA6yziAT+WExDOLAMVJEEF8zC7lEBKgZHv4GyUc+2eYvXOSz+9NKZ3itUIj14hz+2Vsryshx1K9vuJzJGKhQ96Za/xfGsJlJBGfgs9Vut+VEF/2wwHtj6aKujsAaI+ywFPIRcJsWeb+hDW/mIcvceMfWEQx87pIgItgKOmaJHPCW6IdVjeooVgQxErMztcgYufUG8N/8aL3249vqQLcb0LEQZXUUszzDlTJNxEiG87ynMb5/uYgPjKIiVlX1F1YFoL+x2Bo5AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAALCAIAAADk/qT1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACuSURBVEhLY9xhu4uBOJD+KBXKwgtmys2GsgYNoIrLmaA0IUCkZUBAvEr6AGq5nKiQGmyeJx5Q0eXEpimSwNANWTyAcEiNqASFRwtN0tSwBEzAUByWmYXqANRKICakiKz7kY0a2OYCGS7BHw6g3Ac0CL9ZxPt5wEMH4lvyIgyPSqAUgZYn0EoyPI8ncigJSjzGYoK//xmYGcmxDtMWiCEktNFJAuQFMRUBlR3AwAAAFedN7djBmFkAAAAASUVORK5CYII=',
    SecondaryPositionOver: 15,
    SecondaryPositionDown: 55,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAVCAIAAADUyWdkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHYSURBVFhH5ZehTgQxEIb3TpHgeAkMCRoBF9wZNBaPxfAEGCweyxNwwRAwGCSGl8CRIJnLPxnmOt3Zdq/lsrefublu2+n8O512J4vjp6Ya88sjGLfnOwcnz7Adsvpndf54PWWraVJW4pOqmvYqXD38sJUAxVavf2Jn6sZWjHQ1u1UjvbKiHTRaVkfEDtVudvfYGiXX319sreKpJoUjF7wxnaGz+8+Xi30yFndvaAHaRfDIx67NH47+0T5OmBRINOM6VMuKRENjda2Bar1ni6KjXXPmtqkQhRVuyr8G2pvrLMWOLSsZQRPSy4CBlt44M0Rrely1MZczm3f2/tCaa22FcFvR6aaFI2y6RVSjRBubZIBKGM4xTXTzhqqV3ZuoO3KAliXIiPVxLmiBr0iujTPRAmx10y0rqpXdm1IOaiRaJRI/qv5Uq31uFt9QQsGZo5/bgjzlWy4kK5hoiMRWNOdmRGCU3wfYr+OUUYJVh7LMzhkgN96lapAM4elDRNLVfwNEmzOoprWzh5TgrxgEw2lIpaOmDQjHqlVybFUrzkZUm9Km+E+vQwcbYjKbv+O/Q29Zty/XCEq3pWqJXml9bOWwEdX6LTUF8sWqcUMh9EEc3GacRwPi7PHwF4J3CETOmkh5AAAAAElFTkSuQmCC'
};

const bodytwofer = {
    name:"twofer",
    size:128,
    CarPositionOver:12,
    CarPositionDown:55,
    ArchPositionOver:21,
    ArchPositionDown:85,
    FrontWheelOver:33,
    BackWheelOver:94,
    RoofRefOver:32,
    RoofRefDown:52,
    RackOptions:[rackShort, rackMed, rackLong],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ/SURBVGhD7Zo9T1RBFIbFSkNnyw8wJiaSWKjJomhikMJY2hLbjZ0WgIWFH40mNtsqjYW1BcRG1E2URBJNaPwBtHaIHb7Lezw7O1935n4sC8uTyd2Zu3PvzDz3zOws7MTazIcT+Wx9vi65NB68+yu5g+DF3VOSy+H81Y+S85EqzmvqYHWUJu4Rg7IqeA0Wi1Nlh1RTFdSg665AXPqUrEtriWnV6BNlf/LEPZ88I7kx5vbqhffzP5FZ3PnNM6Qg4uDu08JZKYwGDIH0KMutb6Lhj8vXOl+ZJwXibrWv4KjXTD47jePO0i6LITDB0dK1lV8qnXfg5S4z29OS+4/VosVG6zKOpgvUD90cuPXTUe8Z4ixrAJ0rtEbgDhFOcVaTLrgt3KnolPpwoc8mvb6UM/G6OymvAdAzyeUzanM8l/jYg+L4eWquiJG5MIbEIk6XRiVxnh4xxZzjlo2YuNKLAuACJIURoMpYFC76xC/O3fc2GkSJgaygfpaI3Pun4Bd3qfuNmeU/i0zIN9H8yOIuUxYecQw3bpc3H66/2gd5NaggDL3J2peZEe7FqtB0/dKYNiesfRzawNr0ZLkXXNw3WqTPEW6yQo/OvQ/rSyENXIKvRFLIJDIQ9ln3oYRLtm4z/OJq2YJl3SdeOTJxrOHVAppzb8se6h54QJxpDRmePIYwtCGUQWeLw9FVBpXeZ+5GuwY5jtYkis/xeMRZmJ0pF3HmHcyO6fnQ0HCeQdcX57Xm9slsEngbwEnep8SQ0kFD1edpaGLhqVtDs8QNfKoWWgO4kknKDtjKfJn6wY+XFFCZScrDBWPUBFlMoYFLbp9exM3duI/cy8dbOHKWAe/FKZj2E29SLjyHHHGAk2lgqsLd7MZbdKLcGFxqGVWcepvQmciiF1OcTNWJc99xDOkfDmidvR8maJQJzwBJi/J2mP4a12h0NEE8OhLBqHVdM5O8HaYvLkXz0cONNSZ5exDzUXm+q44VVqAx+pDk7TAirvbdQC3zaPig20xSDiPiWq1W+s7rGNATN/f5JguFWAuBmaRGNQ5RnGascWoH33LdVKO+Q4GI63a7zBBLgUqhI560cPVhrWUmnax9nNXJWkAHIn0wW5RvDvoHJfM9HTlPhpRZ8BcnvFWWO9THx1n6bA3dHyPH9kIKpdBPVbMzlDC/dmd65g0yIk5/I8K3FY4fmURrRH+tkyUO8GknuvOKM61FdhUpZnm5diYmzrJmkiUOlHOHDljdjWCJo3TTSG6fFe08QH/Me/bF7e3t4QVr3KOnwX8AluiB2TZJMUgXUFBCnPXUS1sjbv+V9dWLOIo4AHfYzTGvzM5v4liuE5G2SVYwxrGsgcbF9f4eF93HwV1D4pqjojWgnacmCwSZiLO2IyZV/g99IO6qWyPovNcaEHHIue46nQ6OC9v3WBxPJsM//BBxx4RYmXqNY7vdZpHsLO3+A0uV7aPLtkO2AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAALCAIAAACF5oa3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACgSURBVEhLY9xhu4sBG0h/lAplIYGZcrOhrOEFsIQCVv8jg+EXFkxQGgYIBgEQEKNmaAGUUCDee8MsIFByBKl+GwxZg+z4QHY8Ii0MxeilxM3IetHLBZLAUAw4rICiUBhYQMU4gJYLcBOJzOrILhiQ0oFaQQBxPCgUSA0CCKBiVFAOiHc5prOBehnl5eXhHAiDeIBmIhkmkAcotBc9IBgYAGbpPvfCmyjJAAAAAElFTkSuQmCC',
    SecondaryPositionOver: 14,
    SecondaryPositionDown: 55,
    imageSecondary: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHnSURBVGhD7ZihTgQxEIb3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFczhAwaBIML4EhJEj+5W/met1uO+0u7HHXT9y1l9nu9mtntjAa70yqFF6f9k1Lx9ntl2kNweXxqmmlsLn7YFqzxGV57QyrIJuwO0zKCXCshWSJpn+qpgtizfbVKkufbn2pzEiZX11FPk9c1sXaumktMUf3W3eHL2icf77zl9adBV+PJxumMx9wqfW7KTXeRrY5Lh9fPbPdKuvgdBufEqcEyYvR967fRHR4BN7FJhzP4mDPPzVej7iWW6zwyyHPFECGy5qA6AgMgFy7G0AqCC/Rx2dAxZiOrKhfFpAJZDBv+ZtK29w9srh1paoVBP/OslNpmZFMZNcvK68iElzbJYV7p8tcBJYtV5b+LDoUvUw+D1dWl9fHYhAoQTOyuK14bG2egDQ4V0UH+eP4bGhweijFuKg1fAl6k1G//zEOTg9tS9Qch/GmowOX4M8R00kkMBE+M7aL/TwswTDjyurliJQ0Tjg4kBTOlHoBt2sOyyfEAdjIsk2h8RNTMHALQ+JUFj5tTeVQ2qQu8MWUEvM2LKY01LJQ1ZiW0FRMBahloXThbVo0RRlVNx/IwWJKQ72zej+tLCq1rOj/GwvEvA0LcarqG4bzA1CXSphhAAAAAElFTkSuQmCC'
};

const bodies = [ bodybuggle, bodybrix, body039, body005, body3cube, bodytwofer,body653];

// WHEELS

const wheelChromeSteels8 = {
    name:"ChromeSteels8",
    size:8,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABySURBVBhXY9xhu4uBgWGB9DwgmZ2dDSS/Vn0HkiAJoOjy5cuBHCA4cuQIkATKMf+x+g0RBQo9evQILMvA5szKBGFBFELA1KlTgSQTxFw0YGNjA9KBqRwIQJZzt3EiCwGt3Gm3G+pciBzQBCAJFGVgYAAAGpMwO1vCOtkAAAAASUVORK5CYII='
}

const wheelColouredSteels8 = {
    name:"ColouredSteels8",
    size:8,
    customColour:1,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB3SURBVBhXY9xhu4uBgaGdWwhIHkxQB5I7ph4HkgxACXuPM/9h4PDhwwwrPgMFGYGiB7YbA1UcOXIEpBAMbJ8aMEFYyKJTp04FkkwQc9FATzgHSAemciAAucoj2/Kw9AW4kMnyxTp2+6HOBcoBSaAJQBIoysDAAAAY4zWItvspcwAAAABJRU5ErkJggg=='
}

const wheelChromeSteels10 = {
    name:"ChromeSteels10",
    size:10,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVChTZZDBDQIhEEVZshdjS+zRWAM10IEF0AE12ILZo6GljUd88Mmo8SX7w/zPwCzLY9vd4Pq8oLVW9Li9hudWvnM+oTHG4XRSTiibvOoQwn2QUg9KKfKX1hp9BBQ6GRRjzm6wzMDxcv8zMbvtMqEJoP8Yk3/HZJToZ3LbDsq0/nkWm2A+i3NvNt9Dk4FSjU0AAAAASUVORK5CYII='
}

const wheelColouredSteels10 = {
    name:"ColouredSteels10",
    size:10,
    customColour:1,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACiSURBVChTY9xhu4sBDNq5hSAMIKj8+g7CYAFiiERL9XewCAjYPrUEkjumHgdJAwFQzsbGBsI+cuTIYekLJ20sGKYyMNh7nDl8+PB/GICwgWRERETP/99MEB0QANQHJ7Ozs4EkQhoiCgdTpwKNhkkD5eB2IwMmoB9snxoAWci6gVpNli/WsdsP1Q10J8Q0IAmRg4gjguXKIUcIAwiA+kAUAwMALC5O3lrm+Y8AAAAASUVORK5CYII='
}

const wheelChromeSteels12 = {
    name:"ChromeSteels12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC8SURBVChTZZDNDQIhEIVx/amBxD44oRdjLEGsgQ7sg6vxRgv+3FzK2DaMR3zwcDZxv8NkePOYGZjdNg/147q+IHrvEd/nT9UKzcRyjBExpVQqSllr79snkmKCQ8ohhGpo/ehbUAJwQALM4aav4JzLOfd9j0iYI7IEOlplCheStZh06PknTWmdABxcaMr8OJxWu6UxBhO11k2uC2AIrrXXIUMbSLIZGJ8mn3l47XmWtTh6/MwqFsQKWC4o9QW4IXL+aA+xyQAAAABJRU5ErkJggg=='
}

const wheelColouredSteels12 = {
    name:"ColouredSteels12",
    size:12,
    customColour:1,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVChTY9xhu4sBBtq5hYDkwQR1ILlj6nGwGAhAFSFLw0FPOIeO3X4gA6QIqAIifVj6AlgWBGyfGgBJiDomiBAQAFXYwACECxEHAXuPMwwrPh8+fPg/DEDYQDIiIqLn/28gQpgEAUeOHIGT2dnZJSt/ABlMyI6FyMHB1KlT7RfcBDIQJgFVQFyDCZgg4QHxC7JJQGOefyjx3a4P9R3Qn0ASqA4oAZGGqIC7BBqYVw45QvgQlwIBRCciMMGCIABXCgQQaRBgYAAALaBq5Ie4tKQAAAAASUVORK5CYII='
}

const wheelBlackFechs12 = {
    name:"BlackFechs12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACxSURBVChTbVGxDQMhDPRHaaK0rMAQFNmEDdggA6T+hg0YIkpLwRCsQBulzcERI0V/hTkfhw1me95e8sP1cZlM5H3/TCZy5sLtGCPTWuu+7yC09kpweO/HrhhjEFtrTFNK8J2YHMI5R7LlnLVLKYWVrLVU2LdXAgNA9CgVgH27CQygOjwdFMnXnSBpFxCtCqzXQdX6erMQwnod1L9eiKrMiXOYOi0AE0Jcwxxix/G3iHwB9KprWUzaXYAAAAAASUVORK5CYII='
}

const wheelDetFechs12 = {
    name:"DetFechs12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVChTjZG7DYNAEETXlhPLRbgISJBwHwR0QELsAhyT0AESLVhOQaIIEgogtRzid8zxSSx5Ang7t6xmj8Pz9rJFl8fZk9n7/vFkdtJLx2VZquz7vigKwLcyqWma66JpmvYlTMPRNf5QFEWe6E2ShAEIoNw7QRBQukkkaNsWqOt6/tCyLMNB4zhSuuBQmqYM52zucRt0XSdGWybcOI7FjByGQeyk7RQCWJdCcrbtiBWGoVjK83x1/I3rMkk2m05VVfHUZf7xW8y+03d/fthLFToAAAAASUVORK5CYII='
}

const wheelBlackCross12 = {
    name:"BlackCross12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC+SURBVChTbZGxEcIwDEWVHA1HmxU8RAo28QZuXDMAtZts4CE42hQZwiuk5Wh54TuG4/iF8iV9S99OdzvfbcfpeqzM7HF5VmZ20EftaZqUllJSShBJt0kovPckwzA45yRa1xWSc0bXwxpo0BZRRejmedaWZVmIDCNKNI4jMYSweeI0W1RS9dscsRpXAvCLoqVCFQGtiDE2rtWgxzynm1PdTqBI6/d2OoquzRDqi+sx2dUmYZ/4ecx3ccP/32L2Ahr2YyVKNa1hAAAAAElFTkSuQmCC'
}

const wheelHobs12 = {
    name:"Hobs12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC+SURBVChTjZHRDcIwDERdxA9iCLpGpLBHKzEJA3SSSF0B8ZtIXSNLID7LSy4tfHKi5hyffW7aPa5P23CeTo2Zve7vxswO+qPM71ZBStSJqkWksnLnnPceUvVFCm+TADUU4pCccwhBqcUYLxXDMKzrStyJzhF0PEhlMY5jbfxiWRbmHWF470Y75nkmppSIbSc6iCqIMLXve/pLzj3hCLTH71paCEGxA61jA4NlJBQ7Lpft9MLUZA040b3/8VnMPj5Vbi/zVt9cAAAAAElFTkSuQmCC'
}

const wheelSpaces12 = {
    name:"Spaces12",
    size:12,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC6SURBVChTjZHBDcIwDEVdxAUxRLJGpLBHI2WDbsAA3aAbdAjENZG6RpdAHMtrHVK4IP7BfXa+bMttbpe7vHXuT4VEHtdnIZGjfvTZe2+tBeZ5zn0G1LqacMQYgXEcnXNAzrlW8B0gFc90KsmWFkIppWVZNFaRqtq2Ja6d2GMYhhACTFSggqZpgvdxP9TQjVXYtBS+RbOu64Q74TPG6HhiBYoAhn2cjq/6TNc7cQnuAdRNkVb0mH/8FpEXjA50AiSSUpQAAAAASUVORK5CYII='
}

const wheels = [ wheelChromeSteels8, wheelColouredSteels8, wheelChromeSteels10,wheelColouredSteels10, wheelChromeSteels12, wheelColouredSteels12, wheelBlackFechs12, wheelDetFechs12, wheelBlackCross12, wheelHobs12, wheelSpaces12];

// TYRES

const tyre14Normal = {
    name:"14Normal",
    size:14,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdSURBVChTY9xhu4sBBqq/VUJZMNDK1Q5lMTAwQWls6oAAWRCqFKs6CIBLgZTiUQcBEAWMxsbGED5BgHArQTCklCLHBx4AVAYylaBqiAKoA/Cohksh3IpVNUKQgQEAAEsZj9u24qUAAAAASUVORK5CYII='
}

const tyre16Normal = {
    name:"16Normal",
    size:16,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdSURBVDhPY9xhu4sBCVR/q4SyYKCVqx3KAgOEBkylyACujQlC4VcNBHAFIA0EVUMARBnUBuIBo7GxMZRJHCDZhmGhAS3m8QOgYrKcRKQlEGVQGwjqgSsgMXkzMAAA34Ec7yRy2h0AAAAASUVORK5CYII='
}

const tyre18Normal = {
    name:"18Normal",
    size:18,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABsSURBVDhPY9xhu4sBFVR/q4SyYKCVqx3KggEUbZgakAGyZiYoTUgPECArgGojqAcC4MpA2ojUAwEQxQhHkgQYjY2NoUxSAJm2DWttmOmNIABqocCRJFkIUQy1jUidcGUIRxLUiayArGzKwAAA7j4i85xta+wAAAAASUVORK5CYII='
}

const tyre14White = {
    name:"14White",
    size:14,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVChTtZIxDoAgDEWLo9cpqwczzsYrGc/AeVzxk1+QxUYHXwKF5LUpKWGfDqks52ynyjpudhK5VXopJV5BjBF7s02F10s9SDAbqqpmFwjQAgISnkoSdjJg+R6gUNSX/Keyawd7Vj8PB2ilKoJTuI3g+2CJ911ELvkyUhtFjVbrAAAAAElFTkSuQmCC'
}

const tyre16White = {
    name:"16White",
    size:16,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB/SURBVDhPY9xhu4sBCVR/q4SyYKCVqx3KAgMWKA1TeubMGQgXDkxMTIAkXBsThMKlGggggnCbQRrwqIYAZD1QG/CohgCEAmNj4/9EA6BiqA3Eg+GggQGYNIgMKKAyoGKoDZD4xwPgCkAaIOkEjx7k5AS1AY8eZNVAQGLyZmAAALiFgO/KfRlxAAAAAElFTkSuQmCC'
}

const tyre18White = {
    name:"18White",
    size:18,
    imageTyre:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVDhPY9xhu4sBFVR/q4SyYKCVqx3KggEUbRANZ86cgXDhwMTEBEgia0ZoA+rB1IAMgJrhOpkgFEE9QABUgHA/0DZjY+P/RAOgYqAWqG0kA5KsggCgFjJtG87a6BtvIG3AlAZJrAQBPFlCbSNGJ3JSpjjjwAEimcMAsgYQYGAAAIbZvbcI8ovDAAAAAElFTkSuQmCC'
}

const tyres = [tyre14Normal, tyre16Normal, tyre18Normal, tyre14White , tyre16White, tyre18White];



var currentDisplay = {
    body:bodybrix,
    baseColour:"#e6846b",
    wheelColour:"#404040",
    secondaryColour:"#f1f1d0",
    secondaryOption:1,
    wheelColourMatch:0,
    darkColour:-0.25,
    lightColour:0.25,
    wheels:wheelColouredSteels12,
    frontTyre:tyre16Normal,
    backTyre:tyre18Normal,
    bodyDrop:4,
    rack:rackLong,
    rackItem:rackItemLongboard,
    rackItemOver:24,
};

//-----------------------------------------------
// Functions for website setup
//----------------------------------------------- 


Coloris(
    {
        el: '.coloris',
        theme: 'pill',
        //swatchesOnly: true,
        themeMode: 'dark',
        alpha: false,
        swatches: [
            '#264653',
            '#2a9d8f',
            '#e9c46a',
            '#f4a261',
            '#e76f51',
            '#d62828',
            '#023e8a',
            '#0077b6',
            '#0096c7',
            '#00b4d8',
            '#48cae4'
        ] 
    }
);

Coloris.setInstance('.bodyColour', 
    {
        onChange: (color) => {
            currentDisplay.baseColour = color
            setupBodyOptions();
            draw();
        }
    }
);
Coloris.setInstance('.secondaryColour', 
    {
        onChange: (color) => {
            currentDisplay.secondaryColour = color
            draw()
        }
    }
);
Coloris.setInstance('.wheelColour', 
    {
        onChange: (color) => {
            currentDisplay.wheelColour = color;
            setupWheelOptions();
            draw();
        }
    }
);

function emptyCombo(selectEl) {
    selectEl.length = 0;
    return selectEl;
};
  
function populateCombo(selectEl, items) {
    return appendChildren(selectEl, items.map(item => new Option(item, item)));
};
  
function appendChildren(el, children) {
    children.forEach(child => el.appendChild(child));
    return el;
};

//-----------------------------------------------
// Functions for URL fun
//-----------------------------------------------


function encodeCurrentToURL() {

    let returnString = "?" + 
    "body"+currentDisplay.body.name + "|" +
    currentDisplay.baseColour +  "|" +
    currentDisplay.wheelColour +  "|" +
    currentDisplay.secondaryColour + "|" +
    currentDisplay.secondaryOption + "|" +
    currentDisplay.wheelColourMatch + "|" +
    currentDisplay.darkColour + "|" +
    currentDisplay.lightColour + "|" +
    "wheel"+currentDisplay.wheels.name + "|" +
    "tyre"+currentDisplay.frontTyre.name + "|" +
    "tyre"+currentDisplay.backTyre.name + "|" +
    currentDisplay.bodyDrop + "|";

    if ( currentDisplay.rack != "") {
        returnString = returnString + "rack"+currentDisplay.rack.name + "|"
    } else {
        returnString = returnString + "|"
    };

    if ( currentDisplay.rackItem != "") {
        returnString = returnString + "rackItem"+currentDisplay.rackItem.name + "|"
    } else {
        returnString = returnString + "|"
    };

    returnString = returnString + currentDisplay.rackItemOver;

    return returnString;

}

function pickoutFromURL() {

    
    var currentURL = window.location.href;

    if ( currentURL.includes("?") ) {

        propertiesFromURL = currentURL.split("?")[1];

        properties = propertiesFromURL.split("|")

        currentDisplay.body = bodies.find(x => x.name === properties[0].replace("body",""));
        currentDisplay.baseColour = properties[1];
        currentDisplay.wheelColour = properties[2]; 
        currentDisplay.secondaryColour = properties[3]; 
        currentDisplay.secondaryOption = properties[4]; 
        currentDisplay.wheelColourMatch = properties[5]; 
        currentDisplay.darkColour = Number(properties[6]);
        currentDisplay.lightColour = Number(properties[7]); 
        currentDisplay.wheels = wheels.find(x => x.name === properties[8].replace("wheel",""));
        currentDisplay.frontTyre = tyres.find(x => x.name === properties[9].replace("tyre",""));
        currentDisplay.backTyre = tyres.find(x => x.name === properties[10].replace("tyre",""));
        currentDisplay.bodyDrop = Number(properties[11]); 
        if ( properties[12] == "" ) {
            currentDisplay.rack = ""
        } else {
            currentDisplay.rack = racks.find(x => x.name === properties[12].replace("rack",""))
        };
        if ( properties[13] == "" ) {
            currentDisplay.rackItem = ""
        } else {
            currentDisplay.rackItem = rackItems.find(x => x.name === properties[13].replace("rackItem",""))
        };
        currentDisplay.rackItemOver = Number(properties[14]);
        

    }


}

function startingValueSetter() {
    document.getElementById("bodyColourControl").value = currentDisplay.baseColour;
    document.getElementById("secondaryColourControl").value = currentDisplay.secondaryColour;
    document.getElementById("wheelColourControl").value = currentDisplay.wheelColour;

    if (currentDisplay.secondaryOption == 1) {
         document.getElementById("secondaryColourChoice").checked = true
    } else {
         document.getElementById("secondaryColourChoice").checked = false
    }
    if (currentDisplay.wheelColourMatch == 1) {
        document.getElementById("wheelColourMatch").checked = true
   } else {
        document.getElementById("wheelColourMatch").checked = false
   }

    document.querySelector('.bodyColour').dispatchEvent(new Event('input', { bubbles: true }));
    document.querySelector('.secondaryColour').dispatchEvent(new Event('input', { bubbles: true }));
    document.querySelector('.wheelColour').dispatchEvent(new Event('input', { bubbles: true }));
}

function addToURL() {
    //this function just adds to the end of the URL

    //const url = new URL(window.location.href);
    //url.searchParams.set('param1', 'val1');
    //url.searchParams.delete('param2');
    window.history.replaceState(null, null, encodeCurrentToURL())

}



//-----------------------------------------------
// Functions for buttons
//-----------------------------------------------


function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function openCanvasURL() {
    const visibleCanvas = document.getElementById("mainCanvas")
    pngUrl = visibleCanvas.toDataURL();
    console.log(pngUrl)
    // window.open(pngUrl, '_blank');
    visibleCanvas.toBlob((blob) => window.open(URL.createObjectURL(blob), '_blank'));
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function bodyDropdownFunction() {
    document.getElementById("bodyDropdownList").classList.toggle("show");
}

function wheelDropdownFunction() {
    document.getElementById("wheelDropdownList").classList.toggle("show");
    // document.getElementById("wheelDropdownList8").classList.toggle("show");
    // document.getElementById("wheelDropdownList10").classList.toggle("show");
    // document.getElementById("wheelDropdownList12").classList.toggle("show");
}

function frontTyreDropdownFunction() {
    document.getElementById("frontTyreDropdownList").classList.toggle("show");
}
function backTyreDropdownFunction() {
    document.getElementById("backTyreDropdownList").classList.toggle("show");
}

function rackDropdownFunction() {
    document.getElementById("rackDropdownList").classList.toggle("show");
}

function rackItemDropdownFunction() {
    document.getElementById("rackItemDropdownList").classList.toggle("show");
}

function showByElementID(elementID) {
    if (document.getElementById(elementID).classList.contains('hide')) {
        document.getElementById(elementID).classList.remove('hide');
    }
}

function hideByElementID(elementID) {
    if (!document.getElementById(elementID).classList.contains('hide')) {
        document.getElementById(elementID).classList.add('hide');
    }
}

function checkCheckbox() {
    var wheelColourCheckbox = document.getElementById('wheelColourMatch');
    if (wheelColourCheckbox.checked == true) {
        currentDisplay.wheelColourMatch = 1
        draw();
    } else {
        currentDisplay.wheelColourMatch = 0
        draw();
    }

    var secondaryColourCheckbox = document.getElementById('secondaryColourChoice');
    if (secondaryColourCheckbox.checked == true) {
        currentDisplay.secondaryOption = 1
        showByElementID("secondaryColourControl");
        draw();
    } else {
        currentDisplay.secondaryOption = 0
        hideByElementID("secondaryColourControl");
        draw();
    } 
}

function checkForSecondaryColourOption() {

    if ("imageSecondary" in currentDisplay.body) {
        showByElementID("secondaryColourOption");
    } else {
        hideByElementID("secondaryColourOption");
    }

}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContent, tablinks;
  
    // Get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    checkCheckbox();

    if (!event.target.matches('.dropdownButton') && !event.target.matches('.dropdownButtonImage')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    } else { 
        // alert("Button clicked, id "+event.target.id+", text"+event.target.innerHTML) 
        // console.log(event);
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            // console.log(event.target.id.replace('Button','List'));
            // console.log(openDropdown.id);
            if (   (openDropdown.classList.contains('show')) && !(event.target.id.replace('Button','List') == openDropdown.id) ) {
                openDropdown.classList.remove('show');
            }
        }
    };

}

//-----------------------------------------------
// Functions for changing properties
//-----------------------------------------------

function setupBodyOptions () {

    var outputHTML = ``;
    var scaleFactor = 0.5;

    var bodiesToLoad = [];
    var bodyData = [];
    var bodiesCount = 0;

    // var wheel = new Image(); 

    for (bodyEl of bodies) {
        // console.log("body loop");
        // console.log(bodyEl);

        bodyEl.image = new Image();
        bodyEl.imageArchesOption = new Image();
        

        bodyColourInput = currentDisplay.baseColour;

        bodyEl.image.src = bodyEl.imageBody;
        bodyEl.imageArchesOption.src = bodyEl.imageArches;
        // console.log(bodyEl.image.src);
        // console.log(bodyEl.imageArchesOption.src);

        bodiesToLoad.push(bodyEl.image);
        bodiesToLoad.push(bodyEl.imageArchesOption);
        bodyData.push(bodyEl);
        // console.log(wheelsToLoad.length);
    };




    bodiesToLoad.forEach(image =>{
        image.onload = ()=>{ 
            bodiesCount +=1;
            // console.log(bodiesCount);
            // console.log(bodiesToLoad.length);
            if(bodiesCount == bodiesToLoad.length){

                for (bodyEl of bodyData) {

                    // console.log(bodyData);

                    setupButtonCanvas = document.createElement("canvas");
                    setupButtonContext = setupButtonCanvas.getContext("2d");

                    setupButtonCanvas.width = scaleFactor*bodyEl.size;
                    setupButtonCanvas.height = scaleFactor*50;


                    
                    hiddenButtonCanvas = document.createElement("canvas");
                    hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

                    hiddenButtonCanvas.width = scaleFactor*bodyEl.size;
                    hiddenButtonCanvas.height = scaleFactor*50;

        
                    // console.log(bodyEl.name+ " loaded");
                    // console.log(bodyEl.image.src);
                

                    bodyEl.data = setupImageFromData(bodyEl.image,bodyColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
                    bodyEl.dataArches = setupImageFromData(bodyEl.imageArchesOption,bodyColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
                    //bodyEl.data = loadImageToArray(wheel, canvasWidth=128,canvasHeight=128, scaleFactor);
                    // console.log(bodyEl.data);

                    setupButtonContext.clearRect(0,0,512,512);
                    setupButtonContext.putImageData(bodyEl.data,0,0);
                    hiddenButtonContext.drawImage(setupButtonCanvas,0,0);

                    // CarPositionOver:11,
                    // CarPositionDown:59,
                    // SecondaryPositionOver: 50,
                    // SecondaryPositionDown: 50,
                    // ArchPositionOver:16,
                    // ArchPositionDown:82,

                    archOver = scaleFactor* (bodyEl.ArchPositionOver - bodyEl.CarPositionOver);
                    archDown = scaleFactor* (bodyEl.ArchPositionDown - bodyEl.CarPositionDown);

                    setupButtonContext.clearRect(0,0,512,512);
                    setupButtonContext.putImageData(bodyEl.dataArches,0,0);
                    hiddenButtonContext.drawImage(setupButtonCanvas,archOver,archDown);

                    imageBase64 = hiddenButtonCanvas.toDataURL();
                    // console.log("bodies");
                    // console.log(imageBase64);

                    text = (
                        `<a href="#" onclick="bodyChange(this)" id=body` + bodyEl.name + ` class="dropdownButton">
                        <img style='display:block; width:`+scaleFactor*bodyEl.size+`px;height:`+scaleFactor*50+`px;'
                        src=`+imageBase64+` class="dropdownButtonImage">`
                        +`</a>`
                    );

                    outputHTML = outputHTML + text
                    
                    // if (bodyEl.size == 8) {
                    //     size8Options = size8Options + text
                    // } 
                    // if (bodyEl.size == 10) {
                    //     size10Options = size10Options + text
                    // } 
                    // if (bodyEl.size == 12) {
                    //     size12Options = size12Options + text
                    // }                     
                };

                // outputHTML = outputHTML + `<p>size 8:</p>`  + size8Options;
                // outputHTML = outputHTML + `<p>size 10:</p>` + size10Options;
                // outputHTML = outputHTML + `<p>size 12:</p>` + size12Options;

                document.getElementById("bodyDropdownList").innerHTML = outputHTML;

            };
        };
    });    
};

function setupWheelOptions () {

    var outputHTML = ``;
    var size8Options = ``;
    var size10Options = ``;
    var size12Options = ``;
    var scaleFactor = 3;

    var wheelsToLoad = [];
    var wheelData = [];
    var wheelsCount = 0;

    // var wheel = new Image(); 

    for (wheelEl of wheels) {
        // console.log("wheel loop");
        // console.log(wheelEl);

        wheelEl.image = new Image();

        // console.log("wheel loop");
        // console.log(wheelEl);
        

        if (currentDisplay.wheels.customColour == 1) {
    
            if (currentDisplay.wheelColourMatch == 0) {
                wheelColourInput = currentDisplay.wheelColour
            } else {
                wheelColourInput = currentDisplay.baseColour;
            }
    
        } else {
            wheelColourInput = 'blank';
        }

        // alterCanvas = `<canvas hidden id="hiddenButtonCanvas" width="`+wheelEl.size*scaleFactor+`" height="`+wheelEl.size*scaleFactor+`"></canvas>`;
        // document.getElementById("hiddenButtonCanvas").innerHTML = alterCanvas;

        
        // const hiddenButtonCanvas = document.getElementById("hiddenButtonCanvas").getContext("2d");
        
        

        wheelEl.image.src = wheelEl.imageWheel;
        // console.log(wheelEl.image.src);

        wheelsToLoad.push(wheelEl.image);
        wheelData.push(wheelEl);
        // console.log(wheelsToLoad.length);
    };




    wheelsToLoad.forEach(image =>{
        image.onload = ()=>{ 
            wheelsCount +=1;
            // console.log(wheelsCount);
            // console.log(wheelsToLoad.length);
            if(wheelsCount == wheelsToLoad.length){

                for (wheelEl of wheelData) {

                    // console.log(wheelData);
                    
                    hiddenButtonCanvas = document.createElement("canvas");
                    hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

                    hiddenButtonCanvas.width = scaleFactor*wheelEl.size;
                    hiddenButtonCanvas.height = scaleFactor*wheelEl.size

        
                    // console.log(wheelEl.name+ " loaded");
                    // console.log(wheelEl.image.src);
                

                    wheelEl.data = setupImageFromData(wheelEl.image,wheelColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
                    //wheelEl.data = loadImageToArray(wheel, canvasWidth=128,canvasHeight=128, scaleFactor);
                    // console.log(wheelEl.data);

                    hiddenButtonContext.clearRect(0,0,512,512);
                    hiddenButtonContext.putImageData(wheelEl.data,0,0);

                    imageBase64 = hiddenButtonCanvas.toDataURL();
                    // console.log("wheels");
                    // console.log(imageBase64);

                    text = (
                        `<a href="#" onclick="wheelChange(this)" id=wheel` + wheelEl.name + ` class="dropdownButton">
                        <img style='display:block; width:`+scaleFactor*wheelEl.size+`px;height:`+scaleFactor*wheelEl.size+`px;'
                        src=`+imageBase64+`>`
                        +`</a>`
                    );


                    if (wheelEl.size == 8) {
                        size8Options = size8Options + text
                    } 
                    if (wheelEl.size == 10) {
                        size10Options = size10Options + text
                    } 
                    if (wheelEl.size == 12) {
                        size12Options = size12Options + text
                    } 

                    //outputHTML = outputHTML + text
                    
                };

                outputHTML = outputHTML + `<p>size 8:</p>`  + size8Options;
                outputHTML = outputHTML + `<p>size 10:</p>` + size10Options;
                outputHTML = outputHTML + `<p>size 12:</p>` + size12Options;

                document.getElementById("wheelDropdownList").innerHTML = outputHTML;

            };
        };
    });    
};

function setupTyreOptions () {

    var outputHTML = ``;
    var frontSize14Options = ``;
    var frontSize16Options = ``;
    var frontSize18Options = ``;
    var backSize14Options = ``;
    var backSize16Options = ``;
    var backSize18Options = ``;
    var scaleFactor = 1;

    var tyresToLoad = [];
    var tyreData = [];
    var tyresCount = 0;

    // var tyre = new Image(); 

    for (tyreEl of tyres) {
        // console.log("tyre loop");
        // console.log(tyreEl);

        tyreEl.image = new Image();

        // console.log("tyre loop");
        // console.log(tyreEl);
        
        tyreEl.image.src = tyreEl.imageTyre;
        // console.log(tyreEl.image.src);

        tyresToLoad.push(tyreEl.image);
        tyreData.push(tyreEl);
        // console.log(tyresToLoad.length);
    };




    tyresToLoad.forEach(image =>{
        image.onload = ()=>{ 
            tyresCount +=1;
            // console.log(tyresCount);
            // console.log(tyresToLoad.length);
            if(tyresCount == tyresToLoad.length){

                for (tyreEl of tyreData) {

                    // console.log(tyreData);
                    
                    hiddenButtonCanvas = document.createElement("canvas");
                    hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

                    hiddenButtonCanvas.width = scaleFactor*tyreEl.size;
                    hiddenButtonCanvas.height = scaleFactor*tyreEl.size

        
                    // console.log(tyreEl.name+ " loaded");
                    // console.log(tyreEl.image.src);
                

                    tyreEl.data = setupImageFromData(tyreEl.image,'blank',currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
                    //tyreEl.data = loadImageToArray(tyre, canvasWidth=128,canvasHeight=128, scaleFactor);
                    // console.log(tyreEl.data);

                    hiddenButtonContext.clearRect(0,0,512,512);
                    hiddenButtonContext.putImageData(tyreEl.data,0,0);

                    imageBase64 = hiddenButtonCanvas.toDataURL();
                    // console.log("tyres");
                    // console.log(imageBase64);

                    frontText = (
                        `<a href="#" onclick="tyreChange(this)" id=front` + tyreEl.name + ` class="dropdownButton">
                        <img style='display:block; width:`+scaleFactor*tyreEl.size+`px;height:`+scaleFactor*tyreEl.size+`px;'
                        src=`+imageBase64+`>`
                        +`</a>`
                    );

                    backText = (
                        `<a href="#" onclick="tyreChange(this)" id=back` + tyreEl.name + ` class="dropdownButton">
                        <img style='display:block; width:`+scaleFactor*tyreEl.size+`px;height:`+scaleFactor*tyreEl.size+`px;'
                        src=`+imageBase64+`>`
                        +`</a>`
                    );


                    if (tyreEl.size == 14) {
                        frontSize14Options  = frontSize14Options + frontText
                        backSize14Options   = backSize14Options + backText
                    } 
                    if (tyreEl.size == 16) {
                        frontSize16Options  = frontSize16Options + frontText
                        backSize16Options   = backSize16Options + backText
                    } 
                    if (tyreEl.size == 18) {
                        frontSize18Options  = frontSize18Options + frontText
                        backSize18Options   = backSize18Options + backText
                    } 

                    //outputHTML = outputHTML + text
                    
                };

                outputHTML = (
                     `<p> front </p>` + `<p> size 14 </p>`  + frontSize14Options + `<p> size 16 </p>`  + frontSize16Options + `<p> size 18 </p>`  +  frontSize18Options 
                    + `<p> back </p>` + `<p> size 14 </p>`  +  backSize14Options + `<p> size 16 </p>`  +  backSize16Options + `<p> size 18 </p>` + backSize18Options
                );

                frontHTML   = ( `<p> size 14 </p>`  + frontSize14Options + `<p> size 16 </p>`  + frontSize16Options + `<p> size 18 </p>`  + frontSize18Options );
                backHTML    = ( `<p> size 14 </p>`  +  backSize14Options + `<p> size 16 </p>`  +  backSize16Options + `<p> size 18 </p>`  + backSize18Options)

                // console.log(outputHTML);
                // document.getElementById("tyreDropdownList").innerHTML = outputHTML;
                document.getElementById("frontTyreDropdownList").innerHTML = frontHTML;
                document.getElementById("backTyreDropdownList").innerHTML = backHTML;

            };
        };
    });    
};




function setupRackOptions () {
    // Always has a none option
    outputHTML =  `<a href="#" onclick="rackChange(this)" id=none class="dropdownButton">none</a> `;

    if ( 
        currentDisplay.rack == "" || 
        !(currentDisplay.body.RackOptions.includes(currentDisplay.rack))||
        currentDisplay.body.RackOptions.length == 0
    ) { 
        hideByElementID("rackItemDropdownButton") 
    } else {
        showByElementID("rackItemDropdownButton")
    };

    for (rackEl of currentDisplay.body.RackOptions) {
        // console.log(rackEl.name)
        text = `<a href="#" onclick="rackChange(this)" id=rack` + rackEl.name + ` class="dropdownButton">`+(rackEl.name).toLowerCase() +`</a>`
        outputHTML = outputHTML + text
    };


    
    // <a href="#" onclick="rackChange(this)" id=rackShort class="dropdownButton">short</a>

    document.getElementById("rackDropdownList").innerHTML = outputHTML

};

function bodyChange(element) {
    currentDisplay.body = bodies.find(x => x.name === (element.id).replace("body",""));
    checkForSecondaryColourOption();
    setupRackOptions ();

    draw();
}

function bodyHeightChange(element) {
    if (element.id == "heightUp" ) {currentDisplay.bodyDrop--};
    if (element.id == "heightDown" ) {currentDisplay.bodyDrop++};
    draw();
}

function rackItemPosChange(element) {
    if (element.id == "itemLeft10" ) {currentDisplay.rackItemOver = currentDisplay.rackItemOver - 10};
    if (element.id == "itemLeft" ) {currentDisplay.rackItemOver--};
    if (element.id == "itemRight" ) {currentDisplay.rackItemOver++};
    if (element.id == "itemRight10" ) {currentDisplay.rackItemOver = currentDisplay.rackItemOver + 10};
    draw();
}

function wheelChange(element) {
    currentDisplay.wheels = wheels.find(x => x.name === (element.id).replace("wheel",""));
    draw();
}

function tyreChange(element) {
    if (element.id == "front14Normal" ) {currentDisplay.frontTyre = tyre14Normal};
    if (element.id == "front16Normal" ) {currentDisplay.frontTyre = tyre16Normal};
    if (element.id == "front18Normal" ) {currentDisplay.frontTyre = tyre18Normal};
    if (element.id == "back14Normal" ) {currentDisplay.backTyre = tyre14Normal};
    if (element.id == "back16Normal" ) {currentDisplay.backTyre = tyre16Normal};
    if (element.id == "back18Normal" ) {currentDisplay.backTyre = tyre18Normal};

    if (element.id == "front14White" ) {currentDisplay.frontTyre = tyre14White};
    if (element.id == "front16White" ) {currentDisplay.frontTyre = tyre16White};
    if (element.id == "front18White" ) {currentDisplay.frontTyre = tyre18White};
    if (element.id == "back14White" ) {currentDisplay.backTyre = tyre14White};
    if (element.id == "back16White" ) {currentDisplay.backTyre = tyre16White};
    if (element.id == "back18White" ) {currentDisplay.backTyre = tyre18White};
    draw();
}

function rackChange(element) {
    if (element.id == "none" ) {
        currentDisplay.rack = '';
        hideByElementID("rackItemDropdownButton");
    } else {
        currentDisplay.rack = racks.find(x => x.name === (element.id).replace("rack",""));
        showByElementID("rackItemDropdownButton");
    }
}

function rackItemChange(element) {
    if (element.id == "none" ) {
        currentDisplay.rackItem = '';
    } else {
        currentDisplay.rackItem = rackItems.find(x => x.name === (element.id).replace("rackItem",""));
    }
}

//-----------------------------------------------
// Functions for building image
//-----------------------------------------------

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(rgbArray) {
    return "#" + (1 << 24 | rgbArray[0] << 16 | rgbArray[1] << 8 | rgbArray[2]).toString(16).slice(1);
}

function loadImageToArray(imageIn,canvasWidth=128,canvasHeight=128,scaleFactor=globalScaleFactor) {
 
    // console.log(scaleFactor);
    const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");

    hiddenCanvas.clearRect(0,0,canvasWidth*scaleFactor,canvasHeight*scaleFactor);

    width = imageIn.width;
    height = imageIn.height;

    hiddenCanvas.imageSmoothingEnabled = false;
    hiddenCanvas.drawImage(imageIn,0,0,scaleFactor*width,scaleFactor*height);
    // console.log(canvasWidth*scaleFactor);
    var imageData = hiddenCanvas.getImageData(0,0,canvasWidth*scaleFactor,canvasHeight*scaleFactor);
    var pixel = imageData.data

    var r=0, g=1, b=2,a=3;
    for (var p = 0; p<pixel.length; p+=4)
    {
        if (
                pixel[p+r] == 184 &&
                pixel[p+g] == 61 &&
                pixel[p+b] == 186) // if goaway-pink then change alpha to 0
            {pixel[p+a] = 0;}
    }

    return imageData

}

function colourConvert(imageDataIn, oldRGB, newRGB) {

    var imageDataOut = imageDataIn;
    var pixel = imageDataOut.data

    var r=0, g=1, b=2,a=3;
    for (var p = 0; p<pixel.length; p+=4)
    {
        if ( pixel[p+r] == oldRGB[0] && pixel[p+g] == oldRGB[1] && pixel[p+b] == oldRGB[2])
            {
                pixel[p+r] = newRGB[0];
                pixel[p+g] = newRGB[1];
                pixel[p+b] = newRGB[2];
            }
    }

    return imageDataOut

}

function setupImageFromData(imageName,colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank',scaleFactor = globalScaleFactor) {
    imageName.data = loadImageToArray(imageName, canvasWidth=128,canvasHeight=128, scaleFactor=scaleFactor);

    // if we have a colour to convert, we swap the shades:
    if ( colourConvertTo !='blank' ) {

        // base colour convert
        imageName.data = colourConvert(
            imageName.data,
            [0,168,243],
            [
                hexToRgb(colourConvertTo).r,
                hexToRgb(colourConvertTo).g,
                hexToRgb(colourConvertTo).b
            ]
        );
        
        // highlight colour convert
        if ( highlightRatio !='blank' ) {
            imageName.data = colourConvert(
                imageName.data,
                [140,255,251],
                [
                    hexToRgb(colourConvertTo).r*(1+highlightRatio),
                    hexToRgb(colourConvertTo).g*(1+highlightRatio),
                    hexToRgb(colourConvertTo).b*(1+highlightRatio)
                ]
            );
        };

        // lowlight colour convert
        if ( lowlightRatio !='blank' ) {
            imageName.data = colourConvert(
                imageName.data,
                [63,72,204],
                [
                    hexToRgb(colourConvertTo).r*(1+lowlightRatio),
                    hexToRgb(colourConvertTo).g*(1+lowlightRatio),
                    hexToRgb(colourConvertTo).b*(1+lowlightRatio)
                ]
            );
        };
    }

    return imageName.data;

}

function drawImageFromData(
    imageName,x,y,hiddenContext,visibleContext,
    colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank',
    canvasWidth=128,canvasHeight=128,scaleFactor=globalScaleFactor
    ) {

    imageName.data = setupImageFromData(imageName,colourConvertTo,highlightRatio,lowlightRatio);
    
    hiddenContext.clearRect(0,0,canvasWidth*scaleFactor,canvasHeight*scaleFactor);
    hiddenContext.putImageData(imageName.data,0,0);
    visibleContext.imageSmoothingEnabled = false;
    visibleContext.drawImage(hiddenCanvas,x*scaleFactor,y*scaleFactor);

}

function draw() {
    const floorline = 100;
    const visibleCanvas = document.getElementById("mainCanvas")
    const visibleContext = visibleCanvas.getContext("2d");
    const hiddenCanvas = document.getElementById("hiddenCanvas");
    const hiddenContext = hiddenCanvas.getContext("2d");

    visibleContext.imageSmoothingEnabled = false;
    hiddenContext.imageSmoothingEnabled = false;

    const body = new Image(); 
    const frontWheel = new Image(); 
    const backWheel = new Image(); 
    const arches = new Image();
    const frontTyre = new Image(); 
    const backTyre = new Image(); 
    const secondary = new Image();
    const rack = new Image();
    const rackItem = new Image();
    const logoImage = new Image();

    var imagesToLoad = [];
    var imageCount = 0;

    var rackCheck = ( currentDisplay.rack != "" && currentDisplay.body.RackOptions.includes(currentDisplay.rack));
    var rackItemCheck = ( currentDisplay.rackItem != ""  && rackCheck);
    // console.log(rackCheck);
    // console.log(rackItemCheck);


    body.src = currentDisplay.body.imageBody
    imagesToLoad.push(body);
    frontWheel.src = currentDisplay.wheels.imageWheel
    imagesToLoad.push(frontWheel);
    backWheel.src = frontWheel.src
    imagesToLoad.push(backWheel);
    arches.src = currentDisplay.body.imageArches
    imagesToLoad.push(arches);
    frontTyre.src = currentDisplay.frontTyre.imageTyre
    imagesToLoad.push(frontTyre);
    backTyre.src = currentDisplay.backTyre.imageTyre
    imagesToLoad.push(backTyre);
    
    logoImage.src = logo.imageLogo;
    console.log(logoImage);
    imagesToLoad.push(logoImage);

    if ( "imageSecondary" in currentDisplay.body ) {
        secondary.src = currentDisplay.body.imageSecondary
        imagesToLoad.push(secondary);
    };

    if ( rackCheck ) {
        rack.src =  currentDisplay.rack.imageRack
        imagesToLoad.push(rack);
    };
    if ( rackItemCheck ) {
        rackItem.src =  currentDisplay.rackItem.imageRackItem
        imagesToLoad.push(rackItem);
    };

    if (currentDisplay.wheels.customColour == 1) {
        showByElementID("wheelColourOption");

        if (currentDisplay.wheelColourMatch == 0) {
            showByElementID("wheelColourControl");
            wheelColourInput = currentDisplay.wheelColour
        } else {
            hideByElementID("wheelColourControl");
            wheelColourInput = currentDisplay.baseColour;
        }

    } else {
        wheelColourInput = 'blank'
        hideByElementID("wheelColourOption");
    }

    addToURL();
    
    imagesToLoad.forEach(image =>{
        image.onload = ()=>{ 
            imageCount +=1;
            if(imageCount == imagesToLoad.length){

                visibleContext.clearRect(0,0,128*globalScaleFactor,128*globalScaleFactor);
                visibleContext.imageSmoothingEnabled = false;
                
                drawImageFromData(arches,
                    currentDisplay.body.ArchPositionOver,
                    currentDisplay.body.ArchPositionDown+currentDisplay.bodyDrop,
                    hiddenContext,
                    visibleContext
                );

                drawImageFromData(frontTyre,
                    currentDisplay.body.FrontWheelOver - currentDisplay.frontTyre.size/2,
                    floorline - currentDisplay.frontTyre.size,
                    hiddenContext,
                    visibleContext
                );

                drawImageFromData(backTyre,
                    currentDisplay.body.BackWheelOver - currentDisplay.backTyre.size/2 ,
                    floorline - currentDisplay.backTyre.size,
                    hiddenContext,
                    visibleContext
                ); 
                
                drawImageFromData(frontWheel,
                    currentDisplay.body.FrontWheelOver - currentDisplay.wheels.size/2,
                    floorline - currentDisplay.wheels.size - (currentDisplay.frontTyre.size - currentDisplay.wheels.size)/2,
                    hiddenContext,
                    visibleContext,
                    wheelColourInput,
                    currentDisplay.lightColour,
                    currentDisplay.darkColour
                );

                drawImageFromData(backWheel,
                    currentDisplay.body.BackWheelOver - currentDisplay.wheels.size/2 ,
                    floorline - currentDisplay.wheels.size - (currentDisplay.backTyre.size - currentDisplay.wheels.size)/2,
                    hiddenContext,
                    visibleContext,
                    wheelColourInput,
                    currentDisplay.lightColour,
                    currentDisplay.darkColour
                );  

                drawImageFromData(body,
                    currentDisplay.body.CarPositionOver,
                    currentDisplay.body.CarPositionDown+currentDisplay.bodyDrop,
                    hiddenContext,
                    visibleContext,
                    currentDisplay.baseColour,
                    currentDisplay.lightColour,
                    currentDisplay.darkColour
                );
                
                if (currentDisplay.secondaryOption && "imageSecondary" in currentDisplay.body) { 
                    drawImageFromData(secondary,
                        currentDisplay.body.SecondaryPositionOver,
                        currentDisplay.body.SecondaryPositionDown+currentDisplay.bodyDrop,
                        hiddenContext,
                        visibleContext,
                        currentDisplay.secondaryColour,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    );                    
                };

                if ( rackItemCheck ) {
                    drawImageFromData(rackItem,
                        currentDisplay.body.RoofRefOver + currentDisplay.rackItem.overAddition + currentDisplay.rackItemOver,
                        currentDisplay.body.RoofRefDown + currentDisplay.bodyDrop + currentDisplay.rackItem.downAddition,
                        hiddenContext,
                        visibleContext,
                        wheelColourInput,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    );  
                };

                if ( rackCheck ) {
                    drawImageFromData(rack,
                        currentDisplay.body.RoofRefOver,
                        currentDisplay.body.RoofRefDown+currentDisplay.bodyDrop,
                        hiddenContext,
                        visibleContext,
                        wheelColourInput,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    ); 
                };

                // draw the logo on:

                // hiddenContext.clearRect(0,0,128*scaleFactor,canvasHeight*scaleFactor);
                // hiddenContext.putImageData(imageName.data,0,0);
                // visibleContext.imageSmoothingEnabled = false;
                console.log(logoImage);
                visibleContext.drawImage(logoImage,globalScaleFactor*60,globalScaleFactor*102);

                
            
            }
        }



    })

    
}

window.addEventListener("load", ()=>{
    openTab(event, 'body')
    pickoutFromURL();
    startingValueSetter();
    checkForSecondaryColourOption();
    setupRackOptions ();
    setupBodyOptions();
    setupWheelOptions ();
    setupTyreOptions ();
    checkCheckbox();
    draw();
});



