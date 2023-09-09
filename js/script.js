
// CARS
const scaleFactor = 4;

const carbuggle = {
    name:"buggle",
    CarPositionOver:11,
    CarPositionDown:59,
    ArchPositionOver:16,
    ArchPositionDown:82,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:55,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAjCAIAAAARyBMdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASmSURBVGhDzZo9aBRBFMcvh4X5qBQrwdYmoKCiwiWiIMbCSiRNChtJYRkbo0UEYxBMKRJsbC1FIVELNXegFoJCQOyCIAiCVY7Y6f/2Pz5eZr9mdvYjf5b1zezMm5nfvJmb3Ti0NvGqtfu0sX7WWEm68fSPsZQeTO81VqTxyTfGqkW7hWMiuERe7gJZelh7+J451al5jkIQY5aRu4th6FILJasL0oY5EqKmcObJN2O1Wu+uHtZJLTzCnRBP9j5EebYmfhw11n+xfBU0m+cIiIB199Z2f37b5OZpaXQf7kAJLoCYUXH03vDtxWFCF1URmE1yFIg3+78xYHeOkKB02fukMJNQ6YHZNv/WLkB8fvELIZosH3nVQmGrPOYPl2zN4WqMY/1C5FrBC5RT10+XQrMZjtL1YsEYIqDsHvxsEpFKCcwGOLLTWNRMQr6bY6DQFlBqmuEom4lH9Pvt6jH8Rpt0IVm/wl6KT1sgymo5YvfhhS7KhXz8vPR6vU6nw2IhQiwby1/oBn+4qRCU5Zx7QMpYecJqwoEOBoIRHF9OvoZdYF2jysfOKYwcDovtCfDAnlxaPQI/zKQKHDCD4lHCzaQdxFMxlyRCkpm+0jGIlxYkeZmsTElh/bYDcBKYMAoEZpF4zAaHxWKsSBm7mF5TIis00sTRoq0Cu6TVQ4hO4BO/fuIQSfeo9OCYhi/eLawUY8WEwSfi85KwRtMZbVlynCE9N+4onTgiyKUTIRSs2aZBZQwysUWWF47ZjHL7rKszLHxR5nDkNuEIMXcwmqOvdNQLO3LMbtdRGl8cJe5sJe11PoujhCEd6ZMz5EskkKMl6VJZDvU8wWcaShiJ4ZnKUUMkQTilO5FXIKCuV/lcsWO+HIVXfDiUDhc6txpKDMlkjoT4d3oMRxOcVPRensGC3RLoUZ4RHzXOkRAzhqPJinM2BGPr1yzuiyNLg8c7lcBRQ0QSx13c3REITT1CZJYLkQIXd44aYm5nhJ34Z/U0lDZHDTFO0JouYyVFn9UJ5riP2UW+PgHCgugyHJkqb45zrT2EGCeYdgKwPjizsEZZBUdIBumr3OFot5yAuYVx2MdfjOEe52i/FyYGPFpFkxnHqPjXZtwdd9UaBBAYAtlBLsNh9IkQBMsLG/fvbF359NNk7ZTNkfV1MLJV2hmy2o6jbEqMJhgyogLDQXhK9bEDKzS0BhwvrJ9ngsKiljrw5dIqlYhS51SkjCbwyJrLtIN0XLLIZI2vTj2joV+RSa/NzySz36/hjseoIx9C0Anx5Sjf8mUpd7Y4qe4QKV2eTQAlEMEGMV4IO6Bsdzodnm+QpXuT27M06batkCzsM1uMl4qcwy09oxVpaPPr5eihEQC2CXEzEnMh1iwluKxBihEuuuJdBqlltVWsaQsCWyEuil/1h7rdblRgIH4fpkIgWl/YSmRXQNgfZVkUG1T8vxHov5FxQZvzI3fJmZmZ6NFAK4ceG8tf8fOXsWqX1Y3CwUGUWvqPdP35bXPugYUrhJ0ldFrwxVdc/Qqcy/gEkBgvJO33mbJkTSBQnlg+ZxJ1aWT/I9zRNCGG7FS5qokjFPjX6mKSHb9SiK1W6x/6jEwfee8XAgAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAOCAIAAACwxuV7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC5SURBVFhH7ZaNCYAgEEa1QXKSxolmihaJxmmSBMX0VPw5oVN6BF2gct/LSH4uF4uz3auuXPb50FVX1MWJOootZ+hLEybOpO8uyRUlOWOIgIwTcJQfvgtN+DjQUWls4pqaxAl/a0UQ14THcTR82hx8Ca+jX1AMLoTQJQKy54DqF28ngo6K0poO6DvK6RAINVMS5+wklDVV9AY0KbD/tTF2kAEMlo/ywu4jie/+K3FNOlGL2BMbOBocxh45DFe1h+5b2gAAAABJRU5ErkJggg=='
};

const car3cube = {
    name:"3cube",
    CarPositionOver:11,
    CarPositionDown:62,
    ArchPositionOver:19,
    ArchPositionDown:83,
    FrontWheelOver:30,
    BackWheelOver:94,
    RoofRefOver:67,
    RoofRefDown:58,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAgCAIAAACXXGGzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7Zm9axRBGIf3rAzpbP0DRBAMaKFwFz9A4hViaWsvdmlMLKM2WsnV2lpbJFHwIwaCoKAgiH+A2InNEQvh/MXf8N6b2fncvd3bwofl8u7ezOzMs/O1l97W4EXRAb7sXDJRDqvPfpuoNg9vHDVRUZxafm2iZObsUfTN0Eh96DTL5tw8Lt5feN8/h6Bs8MLTbyY6zNubJ0zkITdjOD1sPh9+vjP+yYth5uMREsdr+1dvnWdLAnVFShMVxd17C2Lk3fFPDFAOAx8oITcjbzr4vhStnjAHj5SIAB63RntyGgUp0YXRf+EiMQsRlVkZkYsqUzweMX/bQkvklXSy3GmqZUQueIf9B4vHzCU/rXq0JKIz/rucTQUvHNfoXzxNRG4UVdmeR0uizFPtUPmZIaPMrQHa8AiDIpHIPGVd7zLhLtm4R5oSWbJGVwBFWUE6dfJyljQnHpr1aL2lUOLG+lRrm3B3jSkyVyVqy1ko0CUb9Ahr2KNgw4F64+C0SHjFnMRgYhyySkiZOHglQDkZNk8p2SUNk7FL+lT2au4fxY5+PxXkXcUay9c2T5vIBXM5h7+Mr/K31tAL1yf8LdFpdJWc28mIx5StkyZlaes4zuenQRvLq7/tUWY0vFri0+kleicNSkhPj8TsBVbXAJyh+v3+7u4uBrizQwnl7CSr5hprAKH8ydez268em3PtkQZ9NegCtBDo8mG5AtqIoviA5RPXoxetZwyV+KRN43Fl58qj4g/6IDP/JwrMDreuI1gaPMHn1CPGC9ZBxD6VyGkiF282z5ioKFAUA+s9DGMTA9OcxJBCNFkFOksAViHViHgUiZyP0vFVjiPCnHSDctM47UrMQHB2C7dHbJHCnbEyM/eISaoLkzhHJ1Qe8gi4xQm0GTmtZSuwpgtNeKwzj+u1KKX+PugRcDtpewTlcsWg818W4QfQEY+ir9yEaAdyYnmcvhf6fvWlRNze938fZMSBZFJ014BE1t/ZBKm/OU+gnNh4XLl8GwdjnYixz6CGj6EFlbmTIyWaEz/pXcGZxnjEZrJ38oP0bZbIDBSUgqh03mkuoCacBFNI6Qq+b6fjGu+M5UTpEomkb0ilXiWisA5ZTdBdQQ5+BXRMpPCDdQabR55wC8mY5HoE+qcNdHDce1brDCRyUEfL1A2u2QQnG+vm91NuNreXX/Ymkwkiaxd6cfgRnxVqQPTSP0OPQqBMbRBUa0LYo0jUHPRH/k4pjEajH79WEVT2CCyVjOsg4rTEaMn1u4IPbXO8tj/dP2pYSqc8VmAm9XdSLtntsT6oh7P/twYm+joec2nKI4gOjUZpU2JRFH8BSmCT1otiw74AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAANCAIAAACitD4nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVEhL5ZbRDYAgDAXBQWQSxzHOZFzEOI6TiKaJCERKS6Tq/cgHwdeDJtVzt6iAYe1h5TC2E6zeQFjCfX5fRFSBi3Ad5PwNfA+Sp1gwe2rByX+KwFco2QWGaH4QkVubQBdZkcLNl9b4FZ6LXQTtekU9Cn4Y1osQ5YKAm/8LrVHkPrQxBpYkJIwVZUTYgYp5UF0XpcLHR2wX/J8eM5JVPDIVV0T11khKQSVUagNLAUgZR14g5gAAAABJRU5ErkJggg=='
};

const car039 = {
    name:"039",
    CarPositionOver:4,
    CarPositionDown:60,
    ArchPositionOver:16,
    ArchPositionDown:79,
    FrontWheelOver:28,
    BackWheelOver:94,
    RoofRefOver:0,
    RoofRefDown:0,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATlSURBVGhDzZk9aBRBGIbPVGqsJIJYqE0UMaCioAHjD1hoIYgWNilECCnSBFT8LSzUCFoEJIXYWByohTYWRgv/ENTCQhBE0kjAymBl1NJ3710/v5uZnZvdub3dh2Uz+zc788x3szOTJbMjzxr15tPr/WmqndMP/qQpL7Mzb9NU1dTadf+1Ze9370IiUKvN3rtfsD+/+IOH1VJf1xCN/ci3rdhTWQyvTmzEvlr1NXVN0ZeuJntoEtd+TVP9K9NUOxRNKtRdR9da9M/v49PT04sXfreuBDE+P5amGo2BgQE8PjMzkx43GveP3GGi99L70r+1wRDdOpcbKGYCopk48e0kNqYJgz3rp1AG9Yprp+jwuGZEU/TCwgL2zWZzcnLy6vKp5PI/Lv46z8TIts3TB9KQD+ymYqiRa/0x3H5jX+tcGpjFXEM0Ev5nZzc2RTcotWOpi2un6MHBwYmJifDOWrsOb6TTi+ew37Bm9aPRBzxDuh7p1ffXByeGscGyLZqJXEhPDUZHR6W78HCz/zoTR5vHmSDo0Lvbp1cc17CM8GGVbh5fijkLXVM0ghpzmaE9L5JbA9BmEddwDfVGZ20gj6xYdRt7PTq0kUjXGFHPhvn6+RgPwe216cinAtfwm6ZaSAUOP9mC/b0duySi6ZrpEOMiDqI5zsMIb93ZIR3sWcC1iGaRPN6d0jXiWkSDslw7FzE8U22WHrofH/qoK4lgT1PtdJy1d/QVia1bxzLRokFu10ZUAn8j56otzWZ5FO+ByyMoWHmuia67s9/Q+FxjbCCzZJ4RCocbcD4rD+IqQptpECjL0wxZRRUCW06DPPVTfAWL7Rm0ZLqWaUUZoZFVf1Yg18+/DJUh6PfiFTgs6Jqi5btEihXacFFSzfVvuXBwIBN+n0HhciKTLN0O13paEWlKHi9JsYAaFvsdsGDSVOLagLfh2ZCKZP13ooNrDzqUbGJ6HkMHyNVU9uM2OkNPRfzqDfheXnLqdrsOFO3pmzCkt3WHWCC55PrJajmt2FkRmS4axrPKJi+SGwzjba6R+5WLyQKC4VrnIkX0iCYsa0yAR4Ki8u1S5p/fxz+ceanP+Gth63aKFj+nLg8xQZ4+v5WmWvxfD2G+GHjgk4iHs8IBoHwdRYOQe8pDhy2AZXs1vGMJ5QYZhtpaAM0YooExF0niWlqP2POf4eHkmbm5Oez9yws2yLzC0AaQLpZ1UIeHgh3dwAhw5inq1m96KLVedzZpA8xu+sbnx3CHbLzspNjCG5AQM2KtB9hvzCsahNxsxBNMQjE3noHntjVVtIZTNyMa5A1qgILqsvZMN16EzQigyLfrCW0B+jhzh2VsPOVEdMdgfKlKgpaRoGVZ5GMHAnIFNen4iFEp+tRK4Tnpr401XBv2dwWCWtC9NotVRieuKyzhrF3zhgKuAXttFBufR91Zy0t5aeebdzwExn+Fkj5EJOJu2Ximi+gy8ZAbT8ZgZKULH7JyHYi0kPFV1MZwyVjY0KTja4a2Xi/X8H8lMXENujIgyWobnTPucQY19rhULKiJhDYPAcsTmKc5l8HeNtIV18Be+3aSJVRjD5b9SPcY71qTK7c210B0y/9YSbxooP8f2DOMj1Ck65jHTdfANtIV0aCLrmVQYeP5WcSYisfhWtBquqLb/g32mPq6LpVSvVfr1E2j8Redeuth7p+uNwAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAPCAIAAADmlz9WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC9SURBVFhH7ZcBDkAwDEXHQewkjiPOJC4ijuMkxopgaqqhGi8Si2zJ/uu2TNLkrQlRdgW0dlRZDa0vEAyCRwhLQYx4PuEFT4FE2Eo51TEj3EtMkKMIKbxH4o04LnV+mMi5HXVbSdHB/dIuUgiVd0MIo+SjbaXQSgutCZCisuBkFJ4pBDZrgkGKnFXGNROelaJs9w1S/gPF4zz4J7HWwrd7vH7BZSmtT5EKv60/hvMwq4B/H94dJFM0knE1YWN6EIJJE4BQ3SAAAAAASUVORK5CYII='
};

const car005 = {
    name:"005",
    CarPositionOver:22,
    CarPositionDown:61,
    ArchPositionOver:26,
    ArchPositionDown:85,
    FrontWheelOver:34,
    BackWheelOver:89,
    RoofRefOver:57,
    RoofRefDown:57,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAhCAIAAADI5hvkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOWSURBVGhD3ZkxaBRBFIbvUnkmhQgWkkI7FQKmVPQUbdTCysKUwVbsAiEmYOMZhbRX2GhKLawsDDaih4idQkDstAh2YhO19N/7h3fvZmZnZ/bmtvDjuLybm5mdb97M7t6mvdN93WqE3XeXTKRYef7XRK3W1s0DJlLoCoB1Fi684ccJmbq862z5CBAr+8oi1xRMV372Qefj+TOMRezi9lcGFm+XT+CdYi+vfR6WeWA1MPkUTFFezEV7MP+JwUavw4CIj1A2QcTyB/WmYFryMO/uLcpKhvb+3T/8ymJz9jDe6QNnEUO8tv+TsQWaWPOFA9XwnzF/s0JzjJ7mO/0PLPcCQ7ysVKNJmTlw6+NA3hNqmPzyYo7kwCFsXpss/pnlLXNTGkEgz2V4/a/ePms+RJBTvswc5SYKgn1r7eRKtL8E8f7Z5L3m67/XGJSd7TTIm5y9Y0Dn7J/aOG6qfx55MZePMrIk4M9OKnevt/NU/wzy2txat72DmyZKJ+bsNXfksYl8VPZQ5zrv7ZRJg/yx1QWWfH+0y4CEz3+SKHbC4Pqr0yy0wLHw7p1uwL0jmyhw/U+WD0wnjifmQMu7m5kCLiIv6LZlrYBuiCasGfavlndtvSNgHr59ucGPgPIydLeVNSMBMZektqjs9a+Qp3nMsGQRIvnHT71gjKMmKWVHBuD198tLtlOHzikA3K6RzfmDp9/v4/3Hr5VhWYG7n+shO8I673jkA9kWN5faA2VyrJ5zaRORB9p/TJ63YtbvUAyOQRjWj6xMKg/hTUAS7JmTS3+uMt50jcl7z+STj2ASkmbTAiMXebxr/zH5yFN6Y+iFOjl6CoDIF3d4XO34Tr+KWv8jMH/fXWJcZJ73p/yssZZckzOSmnkZauUgHy6dZLDYfTpa9lYzdOd9iohrWAOzEC+PmiYaEnOJpb9fHt2hC5i7Dxj4vM17gLy7NBIc1DvIcIZEvtjzVy7fGRYWcCJxM+R9tIJCvLgirE3RPF5zwBEGhrd6b+7c4BmC9mAwwJ+NXgd5o7m3Rwv9yFXImPzKrsrMBeYfgbUEeJ0no9/zNI8EB25+kQuV5oD5D5jjajfDK979dfOYKSbtZcjamZBw2mPMCarp8SCWf5aMrvPin2SexdMll7kGrWS0kKUvMMteF8Xj+udKvosWSIKtjh7a4mt7/gnLQVvf26finvb0+AIJLCNGLzXz2nZ575aJhmSQb5Iaa76UVusfNNmDNC5cKp4AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAJCAIAAADvgKZUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB3SURBVEhLY9xhu4sBCaQ/SoWyYGCm3Gwoa9AAgo5E+ApTKTIYPH7D5U5kFzJBKPxeAgKCCugD8DgDWQrqK2LAgHuM+KAH+WrAnUsMINKREGVMw8lLcEBCChxCAL1khwA8YTMghSGpcYXdV0CAyyD6+4rkIGZgAAApATGhpCrNRQAAAABJRU5ErkJggg=='
};

const car653 = {
    name:"653",
    CarPositionOver:8,
    CarPositionDown:63,
    ArchPositionOver:19,
    ArchPositionDown:82,
    FrontWheelOver:31,
    BackWheelOver:92,
    RoofRefOver:60,
    RoofRefDown:59,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAfCAIAAABmhQT2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPISURBVGhD1Zk/axRBGMZzgYB6gmhh4wdQQTBdFHKKgsQUYpmUFnZip6DR0j8Bba21NLWFpwjBuwMVxD9goR/A1sojNqJP7hlfXmdmZ2d3Z/c2P4ZlZtmdfec378xuLp1+7+VM+zh/5aSpKR6u7DK1OI6d2jS1pmijze693e8WT1zb+GXaxbG8N6a1pTZxdIX2D37ozs2ahkPv+7ypKRrW2jqbUDle22KFgoaHPuHIkwGwOfBK4pUb2VVp2mVTVAKxEzl42u8/emPaE2RKCDpEbziJeh1OMxdO81gqcaw+YPQAvzpnAU6i4HHUmpC22NQqiaWgCuIUeSoG63DaCpuWyi+DM0U/hkj4LjyCQpH4NTmdvk1XJY4Lo7f6ZCooNOwUATCGEnSm+BbiYLS1pcE5HEejkZy0XAfAlfioivwGwsXydtJbyu27xu/rS4eR6UW/qKaZmxgPNzIWqqxC5Af/nvV9pjYBMWAaWC48P86Tp598Q29Fk7SJ3PTGhFi5zVEBor9zy+QghqfzBeSmp841YN3uoi/OAiEhQ1GJT9LENrMm080ahPhs+bNpTGDoXsJ2YtSUA0Jx5KpHJddpSZv3uwdMrQgBXwIHkIvuikMl1gwVxRthfJLm2Jx7sP/jwvbMM0rZVjTe3SpXiky4F2+f1YmcKsGVG07SkE28FvB6xd5s2v9IMlSGldZaYHossp4b0G2Ztf6EJZk2qbKOLQkRM8dTqYRELh3vOiW5or3BeOXKU1yhIZudjZ+mkRTaTKVSv6CKzn1AsRueNkuhsTZjEjNrUQQShNS3xiv26ZVr9Smj9gr127Q+3yzQ483xD9PwgTd+eNGlVQlERMKetVyvU4wx3yZ/WPTazPWo8TpFDwmXuYaDxwaaNZGSVmECeWCxvnoEx/neYzaBbRMqRTzPCIVUElcoOokPtxABmxxRZPDhhWVNyXL/4o2nXyVDbZtY4/jLP4lKwt99hfpsAgh1bZaLXDu1DALvEOD0v189ls5eXXx1GX8vu/eXJmFXJSinEuAuRs4j9LFADgp2QpY/K3tZUEcibttE+rB0jr6//nv1xeaAvbCwXi6mHY13yHid6IKPSBbUx2tbneFwaC6cgLM4cg/Cu4I2QRWb1qrxLpNU6P6rJ4FELh4AzugmkKfMwig2Sha0mcDwKCqTDN56/I4DElhQD4zFfgthNkxNecT9FXOTFYlGeq4DPdqKuQm0EBLo0/O96d4Pktj0ktCsmzXVbRbCYxNY468YE3uTn9brRv6307BK4LcJtNDqYYXTsyaatjkz8xc3tYYajxI5OwAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAOCAIAAAAkIEyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVEhLY9xhu4sBA6Q/SoWysIGZcrOhrGEE0AMCfxAgg2EWHCgBQXwoQMCgCgsiHY/LzYiAIDUUIGAwhAUZLsd0NhOUHrKAvPjD1AUNCPKMG9IAzcuUpoiBDUEq2j7kswa1wIgOCOQENdJTBDAsIAgUEFTMafQE1HI2sCoFIlA7gnITB6Q1gdXZRLoEohdZMaO8vDyUSaJ/Bkk6olYcYO90DU6AGfRUS4kMDABz4EOrPJVmjQAAAABJRU5ErkJggg=='
};

const carbrix = {
    name:"brix",
    CarPositionOver:9,
    CarPositionDown:55,
    ArchPositionOver:15,
    ArchPositionDown:85,
    FrontWheelOver:35,
    BackWheelOver:97,
    RoofRefOver:34,
    RoofRefDown:52,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAnCAIAAACKWVELAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP3SURBVGhD7Zo/aBRBFMb3YqEkqYJp7EUEweIstFCjjVoIgoXa2YiF2GkRrOMV2qYINlqI2gkWBhv/NFGIhSCI2NgLKcRIOv28793kZWZubnYys5dL/HFs3uzNvnnz7Zs/t5vW4vFXVYOcvXGMxv1Lew6deE07QK36tSp/fndKrKqKiSRMuo46DsOtZ2tiRYDelqsfWRnVxPIRr2+KjlCwVv9HGi10QNbaOnYmpsTakcyuroi1kXo6mgmoLryrOotPPvz69uoBGO17MzxDPt5+I5bzVRh9IQlfzvreOq4rAzrizcoaOlLEcHBz4x2xqurO71mxuiA4PWdRR3jTl2wGNGfdg2TPriuxer1wpYzVESKi579+XGcxIUQEd2X5vdYR3nKJSNDE5PRCltujpbz8/BoN8PTCAxwX55dYNIzJ3yAUkXbenm9ZdDeh3bcezE13rzJYRzMnZk+fLY41nPf3QNHdrgzQkSKWGIMjAaZCrpBAErKXkhaD89GM6CzQG45crPOiF4fNg7x5cuSoFKpKsrELimaYkpCO7ojG7IvPzklM3VN3ltRS9tWxxIg200qJZCxEICU1fh2NiCwWAsMQ2S2FTaNd5fIMJ9irSUFNkYBnzMLt2T9qEZGM3XMb+LNr7O7uORi1YuXk5c6M3mnbwKvCdYjenJKYqwxaL4JMdH1amD25raMWkR02CxYwSe62atGveeqo1dT+LcJ9INbluMS9VUWhlBt0NBNnuVBcHbMzFB3982OTcYw6HDTr+aiTkUaAZKG3Xz4CpKStI0WMjCNGcZeh6JgWagxoa11Hk4wge5Nm0f/ZWtu39xFtovcDk9MLYo0a518eFh07E1PmHkJHfEE7Oy/OfUpwXmvhTmvCS0y7ZF1HHCll84MuLw00YYEWZb1uuOHtR+g5RTlwA8UafdCX2dUV0VGPhf+5mYA/Hwvly3ZKQwvPOgN0ekYyUCPtMMF/PEWdu6A5jGvR8czpmzjOfHjMCGJCoXAx1dw6Rbsa6dzsk7zE73jA4vySrSOOCGJgKFpE2i4BD0PXESJimymFPmATGqmmrSNoHVzGMUZHVHBf43rRP5bIcHVEhX7/XmKhf54EgA6yziAT+WExDOLAMVJEEF8zC7lEBKgZHv4GyUc+2eYvXOSz+9NKZ3itUIj14hz+2Vsryshx1K9vuJzJGKhQ96Za/xfGsJlJBGfgs9Vut+VEF/2wwHtj6aKujsAaI+ywFPIRcJsWeb+hDW/mIcvceMfWEQx87pIgItgKOmaJHPCW6IdVjeooVgQxErMztcgYufUG8N/8aL3249vqQLcb0LEQZXUUszzDlTJNxEiG87ynMb5/uYgPjKIiVlX1F1YFoL+x2Bo5AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAALCAIAAADk/qT1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACuSURBVEhLY9xhu4uBOJD+KBXKwgtmys2GsgYNoIrLmaA0IUCkZUBAvEr6AGq5nKiQGmyeJx5Q0eXEpimSwNANWTyAcEiNqASFRwtN0tSwBEzAUByWmYXqANRKICakiKz7kY0a2OYCGS7BHw6g3Ac0CL9ZxPt5wEMH4lvyIgyPSqAUgZYn0EoyPI8ncigJSjzGYoK//xmYGcmxDtMWiCEktNFJAuQFMRUBlR3AwAAAFedN7djBmFkAAAAASUVORK5CYII='
};

const cartwofer = {
    name:"twofer",
    CarPositionOver:12,
    CarPositionDown:55,
    ArchPositionOver:21,
    ArchPositionDown:85,
    FrontWheelOver:33,
    BackWheelOver:94,
    RoofRefOver:30,
    RoofRefDown:53,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ/SURBVGhD7Zo9T1RBFIbFSkNnyw8wJiaSWKjJomhikMJY2hLbjZ0WgIWFH40mNtsqjYW1BcRG1E2URBJNaPwBtHaIHb7Lezw7O1935n4sC8uTyd2Zu3PvzDz3zOws7MTazIcT+Wx9vi65NB68+yu5g+DF3VOSy+H81Y+S85EqzmvqYHWUJu4Rg7IqeA0Wi1Nlh1RTFdSg665AXPqUrEtriWnV6BNlf/LEPZ88I7kx5vbqhffzP5FZ3PnNM6Qg4uDu08JZKYwGDIH0KMutb6Lhj8vXOl+ZJwXibrWv4KjXTD47jePO0i6LITDB0dK1lV8qnXfg5S4z29OS+4/VosVG6zKOpgvUD90cuPXTUe8Z4ixrAJ0rtEbgDhFOcVaTLrgt3KnolPpwoc8mvb6UM/G6OymvAdAzyeUzanM8l/jYg+L4eWquiJG5MIbEIk6XRiVxnh4xxZzjlo2YuNKLAuACJIURoMpYFC76xC/O3fc2GkSJgaygfpaI3Pun4Bd3qfuNmeU/i0zIN9H8yOIuUxYecQw3bpc3H66/2gd5NaggDL3J2peZEe7FqtB0/dKYNiesfRzawNr0ZLkXXNw3WqTPEW6yQo/OvQ/rSyENXIKvRFLIJDIQ9ln3oYRLtm4z/OJq2YJl3SdeOTJxrOHVAppzb8se6h54QJxpDRmePIYwtCGUQWeLw9FVBpXeZ+5GuwY5jtYkis/xeMRZmJ0pF3HmHcyO6fnQ0HCeQdcX57Xm9slsEngbwEnep8SQ0kFD1edpaGLhqVtDs8QNfKoWWgO4kknKDtjKfJn6wY+XFFCZScrDBWPUBFlMoYFLbp9exM3duI/cy8dbOHKWAe/FKZj2E29SLjyHHHGAk2lgqsLd7MZbdKLcGFxqGVWcepvQmciiF1OcTNWJc99xDOkfDmidvR8maJQJzwBJi/J2mP4a12h0NEE8OhLBqHVdM5O8HaYvLkXz0cONNSZ5exDzUXm+q44VVqAx+pDk7TAirvbdQC3zaPig20xSDiPiWq1W+s7rGNATN/f5JguFWAuBmaRGNQ5RnGascWoH33LdVKO+Q4GI63a7zBBLgUqhI560cPVhrWUmnax9nNXJWkAHIn0wW5RvDvoHJfM9HTlPhpRZ8BcnvFWWO9THx1n6bA3dHyPH9kIKpdBPVbMzlDC/dmd65g0yIk5/I8K3FY4fmURrRH+tkyUO8GknuvOKM61FdhUpZnm5diYmzrJmkiUOlHOHDljdjWCJo3TTSG6fFe08QH/Me/bF7e3t4QVr3KOnwX8AluiB2TZJMUgXUFBCnPXUS1sjbv+V9dWLOIo4AHfYzTGvzM5v4liuE5G2SVYwxrGsgcbF9f4eF93HwV1D4pqjojWgnacmCwSZiLO2IyZV/g99IO6qWyPovNcaEHHIue46nQ6OC9v3WBxPJsM//BBxx4RYmXqNY7vdZpHsLO3+A0uV7aPLtkO2AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAALCAIAAACF5oa3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACgSURBVEhLY9xhu4sBG0h/lAplIYGZcrOhrOEFsIQCVv8jg+EXFkxQGgYIBgEQEKNmaAGUUCDee8MsIFByBKl+GwxZg+z4QHY8Ii0MxeilxM3IetHLBZLAUAw4rICiUBhYQMU4gJYLcBOJzOrILhiQ0oFaQQBxPCgUSA0CCKBiVFAOiHc5prOBehnl5eXhHAiDeIBmIhkmkAcotBc9IBgYAGbpPvfCmyjJAAAAAElFTkSuQmCC'
};

const cars = [ carbuggle, carbrix, car039, car005, car3cube, cartwofer,car653]

// WHEELS

const wheelChromeSteels8 = {
    name:"ChromeSteels8",
    size:8,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABZSURBVBhXY9xhu4uBgYG7jRNIQsDXqu9AkgWIgaJTp04FC4JAdls2UI7x8OHDQNHs7GyIKEQFkAvSAQHImoCACUrDAFwrVAJuAoQLBCBXoVueDbYcu3MZGAAVHCWCRJ4sZQAAAABJRU5ErkJggg=='
}

const wheelChromeSteels10 = {
    name:"ChromeSteels10",
    size:10,
    customColour:0,
    imageWheel:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVChTZZDBDQIhEEVZshdjS+zRWAM10IEF0AE12ILZo6GljUd88Mmo8SX7w/zPwCzLY9vd4Pq8oLVW9Li9hudWvnM+oTHG4XRSTiibvOoQwn2QUg9KKfKX1hp9BBQ6GRRjzm6wzMDxcv8zMbvtMqEJoP8Yk3/HZJToZ3LbDsq0/nkWm2A+i3NvNt9Dk4FSjU0AAAAASUVORK5CYII='
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

const wheels = [ wheelChromeSteels8, wheelChromeSteels10, wheelChromeSteels12, wheelColouredSteels12, wheelBlackFechs12]

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

const tyres = [tyre14Normal, tyre16Normal, tyre18Normal ]

var currentDisplay = {
    body:carbuggle,
    baseColour:"#e6846b",
    wheelColour:"#404040",
    secondColour:"",
    twoTone:0,
    wheelColourMatch:0,
    darkColour:-0.25,
    lightColour:0.25,
    wheels:wheelColouredSteels12,
    frontTyre:tyre16Normal,
    backTyre:tyre18Normal,
    bodyDrop:4,
    rack:"BowRack",
    rackAccessory:"LongSurf",
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
            console.log('New color', color)
            draw()
        }
    }
);
Coloris.setInstance('.wheelColour', 
    {
        onChange: (color) => {
            currentDisplay.wheelColour = color
            console.log('New color', color)
            draw()
        }
    }
);

//-----------------------------------------------
// Functions for URL fun
//-----------------------------------------------


function encodeCurrentToURL() {

    let returnString = "?" + 
    "car"+currentDisplay.body.name + "|" +
    currentDisplay.baseColour +  "|" +
    currentDisplay.wheelColour +  "|" +
    currentDisplay.secondColour + "|" +
    currentDisplay.twoTone + "|" +
    currentDisplay.wheelColourMatch + "|" +
    currentDisplay.darkColour + "|" +
    currentDisplay.lightColour + "|" +
    "wheel"+currentDisplay.wheels.name + "|" +
    "tyre"+currentDisplay.frontTyre.name + "|" +
    "tyre"+currentDisplay.backTyre.name + "|" +
    currentDisplay.bodyDrop + "|" +
    currentDisplay.rack + "|" +
    currentDisplay.rackAccessory

    return returnString;

}

function pickoutFromURL() {

    var currentURL = window.location.href.split("?")[1];

    carProperties = currentURL.split("|")

    console.log( carProperties[0])

    currentDisplay.body = cars.find(x => x.name === carProperties[0].replace("car",""));
    currentDisplay.baseColour = carProperties[1];
    currentDisplay.wheelColour = carProperties[2]; 
    currentDisplay.secondColour = carProperties[3]; 
    currentDisplay.twoTone = carProperties[4]; 
    currentDisplay.wheelColourMatch = carProperties[5]; 
    currentDisplay.darkColour = Number(carProperties[6]);
    currentDisplay.lightColour = Number(carProperties[7]); 
    currentDisplay.wheels = wheels.find(x => x.name === carProperties[8].replace("wheel",""));
    currentDisplay.frontTyre = tyres.find(x => x.name === carProperties[9].replace("tyre",""));
    currentDisplay.backTyre = tyres.find(x => x.name === carProperties[10].replace("tyre",""));
    currentDisplay.bodyDrop = Number(carProperties[11]); 
    currentDisplay.rack = carProperties[12]; 
    currentDisplay.rackAccessory =carProperties[13];

    console.log( cars);
    console.log( cars.find(x => x.name === carProperties[0].replace("car","")) );
    console.log(wheels.find(x => x.name === carProperties[8].replace("wheel","")) );
    console.log(tyres.find(x => x.name === carProperties[9].replace("tyre","")) );
    console.log(tyres.find(x => x.name === carProperties[10].replace("tyre","")) );

    console.log( currentDisplay);


}

function startingValueSetter() {
    document.getElementById("bodyColourControl").value = currentDisplay.baseColour;
    document.getElementById("wheelColourControl").value = currentDisplay.wheelColour;
    console.log(currentDisplay.baseColour);
    console.log(document.getElementById("bodyColourControl").value);
    document.querySelector('.bodyColour').dispatchEvent(new Event('input', { bubbles: true }));
    document.querySelector('.wheelColour').dispatchEvent(new Event('input', { bubbles: true }));
}

function addToURL() {
    //this function just adds to the end of the URL

    //const url = new URL(window.location.href);
    //url.searchParams.set('param1', 'val1');
    //url.searchParams.delete('param2');
    window.history.replaceState(null, null, encodeCurrentToURL())

}






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
}

function tyreDropdownFunction() {
    document.getElementById("tyreDropdownList").classList.toggle("show");
}

function wheelColourOptionShow() {
    if (document.getElementById("wheelColourOption").classList.contains('hide')) {
        document.getElementById("wheelColourOption").classList.remove('hide');
    }
}

function wheelColourOptionHide() {
    if (!document.getElementById("wheelColourOption").classList.contains('hide')) {
        document.getElementById("wheelColourOption").classList.add('hide');
    }
}

function wheelColourControlShow() {
    if (document.getElementById("wheelColourControl").classList.contains('hide')) {
        document.getElementById("wheelColourControl").classList.remove('hide');
    }
}

function wheelColourControlHide() {
    if (!document.getElementById("wheelColourControl").classList.contains('hide')) {
        document.getElementById("wheelColourControl").classList.add('hide');
    }
}

function checkCheckbox() {
    var checkbox = document.getElementById('wheelColourMatch');
    if (checkbox.checked == true) {
        currentDisplay.wheelColourMatch = 1
        draw();
    } else {
        currentDisplay.wheelColourMatch = 0
        draw();
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

    if (!event.target.matches('.dropdownButton')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    // if (event.target.matches('.buggleButton')) {
    //     currentDisplay.body = carbuggle
    //     draw()
    // }
    // if (event.target.matches('.3cubeButton')) {
    //     currentDisplay.body = car3cube
    //     draw()
    // }
}

function bodyChange(element) {
    if (element.id == "carbuggle" ) {currentDisplay.body = carbuggle};
    if (element.id == "car3cube" ) {currentDisplay.body = car3cube};
    
    if (element.id == "car039" ) {currentDisplay.body = car039};
    if (element.id == "car653" ) {currentDisplay.body = car653};
    if (element.id == "carbrix" ) {currentDisplay.body = carbrix};
    if (element.id == "cartwofer" ) {currentDisplay.body = cartwofer};
    if (element.id == "car005" ) {currentDisplay.body = car005};
    draw();
}

function bodyHeightChange(element) {
    if (element.id == "heightUp" ) {currentDisplay.bodyDrop--};
    if (element.id == "heightDown" ) {currentDisplay.bodyDrop++};
    draw();
}

function wheelChange(element) {
    if (element.id == "wheelChromeSteels8") {currentDisplay.wheels = wheelChromeSteels8};
    if (element.id == "wheelChromeSteels10") {currentDisplay.wheels = wheelChromeSteels10};
    if (element.id == "wheelChromeSteels12") {currentDisplay.wheels = wheelChromeSteels12};
    if (element.id == "wheelColouredSteels12") {currentDisplay.wheels = wheelColouredSteels12};
    if (element.id == "wheelBlackFechs12") {currentDisplay.wheels = wheelBlackFechs12}
    draw();
}

function tyreChange(element) {
    if (element.id == "front14" ) {currentDisplay.frontTyre = tyre14Normal};
    if (element.id == "front16" ) {currentDisplay.frontTyre = tyre16Normal};
    if (element.id == "front18" ) {currentDisplay.frontTyre = tyre18Normal};
    if (element.id == "back14" ) {currentDisplay.backTyre = tyre14Normal};
    if (element.id == "back16" ) {currentDisplay.backTyre = tyre16Normal};
    if (element.id == "back18" ) {currentDisplay.backTyre = tyre18Normal};
    draw();
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

function loadImageToArray(imageIn) {
 
    const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");

    hiddenCanvas.clearRect(0,0,128*scaleFactor,128*scaleFactor);

    width = imageIn.width;
    height = imageIn.height;

    hiddenCanvas.imageSmoothingEnabled = false;
    hiddenCanvas.drawImage(imageIn,0,0,scaleFactor*width,scaleFactor*height);
    var imageData = hiddenCanvas.getImageData(0,0,128*scaleFactor,128*scaleFactor);
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

function drawImageFromData(imageName,x,y,hiddenContext,visibleContext,colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank') {

    imageName.data = loadImageToArray(imageName);

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


    hiddenContext.clearRect(0,0,128*scaleFactor,128*scaleFactor);
    hiddenContext.putImageData(imageName.data,0,0);
    visibleContext.imageSmoothingEnabled = false;
    visibleContext.drawImage(hiddenCanvas,x*scaleFactor,y*scaleFactor);

}

function draw() {
    const floorline = 100;
    const visibleCanvas = document.getElementById("mainCanvas")
    const visibleContext = visibleCanvas.getContext("2d");
    const hiddenCanvas = document.getElementById("hiddenCanvas");
    const hiddenContext = hiddenCanvas.getContext("2d")

    visibleContext.imageSmoothingEnabled = false;
    hiddenContext.imageSmoothingEnabled = false;

    const body = new Image(); 
    const frontWheel = new Image(); 
    const backWheel = new Image(); 
    const arches = new Image();
    const frontTyre = new Image(); 
    const backTyre = new Image(); 

    var imagesToLoad = [];
    var imageCount = 0;


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

    if (currentDisplay.wheels.customColour == 1) {
        wheelColourOptionShow();

        if (currentDisplay.wheelColourMatch == 0) {
            wheelColourControlShow();
            wheelColourInput = currentDisplay.wheelColour
        } else {
            wheelColourControlHide();
            wheelColourInput = currentDisplay.baseColour;
        }

    } else {
        wheelColourInput = 'blank'
        wheelColourOptionHide();
    }

    addToURL();
    
    imagesToLoad.forEach(image =>{
        image.onload = ()=>{ 
            imageCount +=1;
            if(imageCount == imagesToLoad.length){

                visibleContext.clearRect(0,0,128*scaleFactor,128*scaleFactor);
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
                 
                
            }
        }



    })

    
}

window.addEventListener("load", ()=>{
    openTab(event, 'body')
    pickoutFromURL();
    startingValueSetter();
    draw();
});



