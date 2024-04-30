
const { createCanvas, loadImage, Image } = require('canvas');

const drawingPixels = 128
// const mainCanvasScaleFactor = document.getElementById("mainCanvas").width / drawingPixels;



const otherColourList = [ "primaryColour", "secondaryColour", "wheelColour" ];

const colourGroups = [
    "Pinks", 
    "Purples",
    "Reds",
    "Oranges",
    "Yellows",
    "Greens",
    "Cyans",
    "BLues",
    "Browns",
    "Whites",
    "Greys"
]

const allColours = [
    [ "Pink" , "#FFC0CB" , "Pinks" , "White" ] ,
    [ "LightPink" , "#FFB6C1" , "Pinks" , "White" ] ,
    [ "HotPink" , "#FF69B4" , "Pinks" , "White" ] ,
    [ "DeepPink" , "#FF1493" , "Pinks" , "White" ] ,
    [ "PaleVioletRed" , "#DB7093" , "Pinks" , "White" ] ,
    [ "MediumVioletRed" , "#C71585" , "Pinks" , "White" ] ,

    [ "Lavender" , "#E6E6FA" , "Purples" , "White" ] ,
    [ "Thistle" , "#D8BFD8" , "Purples" , "White" ] ,
    [ "Plum" , "#DDA0DD" , "Purples" , "White" ] ,
    [ "Orchid" , "#DA70D6" , "Purples" , "White" ] ,
    [ "Violet" , "#EE82EE" , "Purples" , "White" ] ,
    [ "Fuchsia" , "#FF00FF" , "Purples" , "White" ] ,
    [ "Magenta" , "#FF00FF" , "Purples" , "White" ] ,
    [ "MediumOrchid" , "#BA55D3" , "Purples" , "White" ] ,
    [ "DarkOrchid" , "#9932CC" , "Purples" , "White" ] ,
    [ "DarkViolet" , "#9400D3" , "Purples" , "White" ] ,
    [ "BlueViolet" , "#8A2BE2" , "Purples" , "White" ] ,
    [ "DarkMagenta" , "#8B008B" , "Purples" , "White" ] ,
    [ "Purple" , "#800080" , "Purples" , "White" ] ,
    [ "MediumPurple" , "#9370DB" , "Purples" , "White" ] ,
    [ "MediumSlateBlue" , "#7B68EE" , "Purples" , "White" ] ,
    [ "SlateBlue" , "#6A5ACD" , "Purples" , "White" ] ,
    [ "DarkSlateBlue" , "#483D8B" , "Purples" , "White" ] ,
    [ "RebeccaPurple" , "#663399" , "Purples" , "White" ] ,
    [ "Indigo" , "#4B0082" , "Purples" , "White" ] ,

    [ "LightSalmon" , "#FFA07A" , "Reds" , "White" ] ,
    [ "Salmon" , "#FA8072" , "Reds" , "White" ] ,
    [ "DarkSalmon" , "#E9967A" , "Reds" , "White" ] ,
    [ "LightCoral" , "#F08080" , "Reds" , "White" ] ,
    [ "IndianRed" , "#CD5C5C" , "Reds" , "White" ] ,
    [ "Crimson" , "#DC143C" , "Reds" , "White" ] ,
    [ "Red" , "#FF0000" , "Reds" , "White" ] ,
    [ "FireBrick" , "#B22222" , "Reds" , "White" ] ,
    [ "DarkRed" , "#8B0000" , "Reds" , "White" ] ,

    [ "Orange" , "#FFA500" , "Oranges" , "White" ] ,
    [ "DarkOrange" , "#FF8C00" , "Oranges" , "White" ] ,
    [ "Coral" , "#FF7F50" , "Oranges" , "White" ] ,
    [ "Tomato" , "#FF6347" , "Oranges" , "White" ] ,
    [ "OrangeRed" , "#FF4500" , "Oranges" , "White" ] ,

    [ "Gold" , "#FFD700" , "Yellows" , "White" ] ,
    [ "Yellow" , "#FFFF00" , "Yellows" , "White" ] ,
    [ "LightYellow" , "#FFFFE0" , "Yellows" , "White" ] ,
    [ "LemonChiffon" , "#FFFACD" , "Yellows" , "White" ] ,
    [ "LightGoldenRodYellow" , "#FAFAD2" , "Yellows" , "White" ] ,
    [ "PapayaWhip" , "#FFEFD5" , "Yellows" , "White" ] ,
    [ "Moccasin" , "#FFE4B5" , "Yellows" , "White" ] ,
    [ "PeachPuff" , "#FFDAB9" , "Yellows" , "White" ] ,
    [ "PaleGoldenRod" , "#EEE8AA" , "Yellows" , "White" ] ,
    [ "Khaki" , "#F0E68C" , "Yellows" , "White" ] ,
    [ "DarkKhaki" , "#BDB76B" , "Yellows" , "White" ] ,

    [ "GreenYellow" , "#ADFF2F" , "Greens" , "White" ] ,
    [ "Chartreuse" , "#7FFF00" , "Greens" , "White" ] ,
    [ "LawnGreen" , "#7CFC00" , "Greens" , "White" ] ,
    [ "Lime" , "#00FF00" , "Greens" , "White" ] ,
    [ "LimeGreen" , "#32CD32" , "Greens" , "White" ] ,
    [ "PaleGreen" , "#98FB98" , "Greens" , "White" ] ,
    [ "LightGreen" , "#90EE90" , "Greens" , "White" ] ,
    [ "MediumSpringGreen" , "#00FA9A" , "Greens" , "White" ] ,
    [ "SpringGreen" , "#00FF7F" , "Greens" , "White" ] ,
    [ "MediumSeaGreen" , "#3CB371" , "Greens" , "White" ] ,
    [ "SeaGreen" , "#2E8B57" , "Greens" , "White" ] ,
    [ "ForestGreen" , "#228B22" , "Greens" , "White" ] ,
    [ "Green" , "#008000" , "Greens" , "White" ] ,
    [ "DarkGreen" , "#006400" , "Greens" , "White" ] ,
    [ "YellowGreen" , "#9ACD32" , "Greens" , "White" ] ,
    [ "OliveDrab" , "#6B8E23" , "Greens" , "White" ] ,
    [ "DarkOliveGreen" , "#556B2F" , "Greens" , "White" ] ,
    [ "MediumAquaMarine" , "#66CDAA" , "Greens" , "White" ] ,
    [ "DarkSeaGreen" , "#8FBC8F" , "Greens" , "White" ] ,
    [ "LightSeaGreen" , "#20B2AA" , "Greens" , "White" ] ,
    [ "DarkCyan" , "#008B8B" , "Greens" , "White" ] ,
    [ "Teal" , "#008080" , "Greens" , "White" ] ,

    [ "Aqua" , "#00FFFF" , "Cyans" , "White" ] ,
    [ "Cyan" , "#00FFFF" , "Cyans" , "White" ] ,
    [ "LightCyan" , "#E0FFFF" , "Cyans" , "White" ] ,
    [ "PaleTurquoise" , "#AFEEEE" , "Cyans" , "White" ] ,
    [ "Aquamarine" , "#7FFFD4" , "Cyans" , "White" ] ,
    [ "Turquoise" , "#40E0D0" , "Cyans" , "White" ] ,
    [ "MediumTurquoise" , "#48D1CC" , "Cyans" , "White" ] ,
    [ "DarkTurquoise" , "#00CED1" , "Cyans" , "White" ] ,

    [ "CadetBlue" , "#5F9EA0" , "Blues" , "White" ] ,
    [ "SteelBlue" , "#4682B4" , "Blues" , "White" ] ,
    [ "LightSteelBlue" , "#B0C4DE" , "Blues" , "White" ] ,
    [ "LightBlue" , "#ADD8E6" , "Blues" , "White" ] ,
    [ "PowderBlue" , "#B0E0E6" , "Blues" , "White" ] ,
    [ "LightSkyBlue" , "#87CEFA" , "Blues" , "White" ] ,
    [ "SkyBlue" , "#87CEEB" , "Blues" , "White" ] ,
    [ "CornflowerBlue" , "#6495ED" , "Blues" , "White" ] ,
    [ "DeepSkyBlue" , "#00BFFF" , "Blues" , "White" ] ,
    [ "DodgerBlue" , "#1E90FF" , "Blues" , "White" ] ,
    [ "RoyalBlue" , "#4169E1" , "Blues" , "White" ] ,
    [ "Blue" , "#0000FF" , "Blues" , "White" ] ,
    [ "MediumBlue" , "#0000CD" , "Blues" , "White" ] ,
    [ "DarkBlue" , "#00008B" , "Blues" , "White" ] ,
    [ "Navy" , "#000080" , "Blues" , "White" ] ,
    [ "MidnightBlue" , "#191970" , "Blues" , "White" ] ,

    [ "Cornsilk" , "#FFF8DC" , "Browns" , "White" ] ,
    [ "BlanchedAlmond" , "#FFEBCD" , "Browns" , "White" ] ,
    [ "Bisque" , "#FFE4C4" , "Browns" , "White" ] ,
    [ "NavajoWhite" , "#FFDEAD" , "Browns" , "White" ] ,
    [ "Wheat" , "#F5DEB3" , "Browns" , "White" ] ,
    [ "BurlyWood" , "#DEB887" , "Browns" , "White" ] ,
    [ "Tan" , "#D2B48C" , "Browns" , "White" ] ,
    [ "RosyBrown" , "#BC8F8F" , "Browns" , "White" ] ,
    [ "SandyBrown" , "#F4A460" , "Browns" , "White" ] ,
    [ "GoldenRod" , "#DAA520" , "Browns" , "White" ] ,
    [ "DarkGoldenRod" , "#B8860B" , "Browns" , "White" ] ,
    [ "Peru" , "#CD853F" , "Browns" , "White" ] ,
    [ "Chocolate" , "#D2691E" , "Browns" , "White" ] ,
    [ "Olive" , "#808000" , "Browns" , "White" ] ,
    [ "SaddleBrown" , "#8B4513" , "Browns" , "White" ] ,
    [ "Sienna" , "#A0522D" , "Browns" , "White" ] ,
    [ "Brown" , "#A52A2A" , "Browns" , "White" ] ,
    [ "Maroon" , "#800000" , "Browns" , "White" ] ,

    [ "White" , "#FFFFFF" , "Whites" , "White" ] ,
    [ "Snow" , "#FFFAFA" , "Whites" , "White" ] ,
    [ "HoneyDew" , "#F0FFF0" , "Whites" , "White" ] ,
    [ "MintCream" , "#F5FFFA" , "Whites" , "White" ] ,
    [ "Azure" , "#F0FFFF" , "Whites" , "White" ] ,
    [ "AliceBlue" , "#F0F8FF" , "Whites" , "White" ] ,
    [ "GhostWhite" , "#F8F8FF" , "Whites" , "White" ] ,
    [ "WhiteSmoke" , "#F5F5F5" , "Whites" , "White" ] ,
    [ "SeaShell" , "#FFF5EE" , "Whites" , "White" ] ,
    [ "Beige" , "#F5F5DC" , "Whites" , "White" ] ,
    [ "OldLace" , "#FDF5E6" , "Whites" , "White" ] ,
    [ "FloralWhite" , "#FFFAF0" , "Whites" , "White" ] ,
    [ "Ivory" , "#FFFFF0" , "Whites" , "White" ] ,
    [ "AntiqueWhite" , "#FAEBD7" , "Whites" , "White" ] ,
    [ "Linen" , "#FAF0E6" , "Whites" , "White" ] ,
    [ "LavenderBlush" , "#FFF0F5" , "Whites" , "White" ] ,
    [ "MistyRose" , "#FFE4E1" , "Whites" , "White" ] ,

    [ "Gainsboro" , "#DCDCDC" , "Greys" , "White" ] ,
    [ "LightGray" , "#D3D3D3" , "Greys" , "White" ] ,
    [ "Silver" , "#C0C0C0" , "Greys" , "White" ] ,
    [ "DarkGray" , "#A9A9A9" , "Greys" , "White" ] ,
    [ "DimGray" , "#696969" , "Greys" , "White" ] ,
    [ "Gray" , "#808080" , "Greys" , "White" ] ,
    [ "LightSlateGray" , "#778899" , "Greys" , "White" ] ,
    [ "SlateGray" , "#708090" , "Greys" , "White" ] ,
    [ "DarkSlateGray" , "#2F4F4F" , "Greys" , "White" ] ,
    [ "Black" , "#000000" , "Greys" , "White" ] ,


]

const backgroundColours = [
    [ "Peach",'#fe9ecc', "backgrounds" , "White" ],
    [ "Pink",'#f74071', "backgrounds" , "White" ],
    [ "Purple",'#a16fe2', "backgrounds" , "White" ],
    [ "Blue",'#68c7d8', "backgrounds" , "White" ],
    [ "Yellow",'#fbd321', "backgrounds" , "White" ],
    [ "Orange",'#fa944c', "backgrounds" , "White" ],
    [ "Beige",'#dcc4aa', "backgrounds" , "White" ],
    [ "Teal",'#6dd1bb', "backgrounds" , "White" ],
]

const logoWhtPlate = {
    name:"logoWhtPlate",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAPCAYAAACLKbN4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF7SURBVFhH7ZgxbsMwDEVtAwE65DjZO+cEuUiOkUN0TOYuXXOEjDlHOxTo4OY7+i7DULIky1P1AMPUF0nLlCBHaRvBof/pnZnN/vTtrHQOuxdn5TPn+TGkjnHfrsYaDwaLvPRA/yOcHBS9G6wbtdDLIOvaYVVPFbrfrZ0VT06Mj9hcMX4lxpWaY6jv8bMfV3aI9vTlrArIrcdTsTFrvAhtPaPaR/dbaD8rztJIqj/w9Vs6NalrzeojbEsNvL5dn4sNMHO4dIDUcOcM07ZiJNJPtxkXyjXlbxHqp27lor+lEZ075Au61A8jkjCpBFpIL4XvOTnosfHdpjQfU75Re7YEiZhUAg2XxqfnUiof30Pnoibfz9J8hHxbfCWdPaAfAjgw3olsM07HaCw/oPMCK1fIH0idyBgrF2Af8fkAK4cvnmDPNoutHSvzwMHmfXu5/c4ucESuxDEe1+sJchm4qs8fm7/jel3hZUE9WWjy8K+f3L+xoVfmgxV9t5rmF6YSSRdFYxCaAAAAAElFTkSuQmCC',
    positionOver:18.5,
    width:91,
    height:15
}

const logoBlkPlate = {
    name:"logoBlkPlate",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAPCAYAAACLKbN4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF6SURBVFhH7ZgxTsQwEEWTSEg03IaemhPAQfYYewjKpabZliNQco5tkCiCf/APk9mxYztOhZ8UZfw9M3HGlrPevhMcx+/Rm8UcXr+8lc/x6dZb5Wx5fgq5Yzz0N3ONJ4NF3nug/xFODoo+TJajFXofZF0HrOrVQj/feSODkpgQqblS/GqMKzPHVN/TZZxXdpTTxRuNicJ6XBcbs8aL0NYzqn10v4X2s+IsjeT6g1C/pVOTutasPsK21BwPL59GsQFmDpcKWGi4c4ZpWzES6afbjIvlWvO3iPVTt3LR39KIzh3zdQzZH0YkYVIJtJhei9BzStBj47utaSFWfNP2bAkSMakEGi5NSC+lVj6+h85FTb6fpYWI+PauY3mQ0Q8BHBjvRLYZp2M0lh/QeYGVK+YPpE5kjJULsI+EfICVIxTvwZ5tF1s5NraBg83b44f7nV3hiNxIYz6utxPkPnBVv5/v/47rbYXXBfVkocniXz+5f2NDb2wHK/rX6rofksjkUwwIsuoAAAAASUVORK5CYII=',
    positionOver:18.5,
    width:91,
    height:15
}

const logoBlk = {
    name:"logoBlk",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADQSURBVEhL7ZNRDoMwDEPZ7n/nTR41cq2khK6ffRJreXE6KHAkfNr4hJmejOpaldyK6yqt8W6j82rj5qS0H9hM7DoPwrk/Ec94PcJzUV/kyNM8yOqRp1PvLqoRnv+cF3QEIweiOnF31+eumlfcjTKVfpDlu/PsM1fwiqPJX3W4kV9F9j8z+LXx3u5cRpetbCaCbFLgcDiZn2XVerwPX4tO7y9yGV0WPzwI5+qAZ6IeJ8p5NsqQUd490Zpm6LWm5yBzRGucX/VrsvmPyme+KXEcX8+nfqRxyfOLAAAAAElFTkSuQmCC',
    positionOver:22.5,
    width:83,
    height:9
}

const logoWht = {
    name:"logoWht",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD4SURBVEhL7ZPLFoMwCAVt//+f21w65JCnHO3SWRgYCNZUjxmfAmGaK3tWZGdl+rKzdmRnvFkbXgXCh0L2PN46dQdX/4noRMwVC9IltG33oaazKKX7BeWhjp7OEqjB+SpMFkjbXruAx1knPI7O6V3MPd45X8XORXq369nVIu76Wp9PP/OIXnFt6l91ObHypLdh3HCfKzCq/jbNRG3dir739DDV6JtQhpwgraBvP7jDuL8cJKOaWajm+VDDM8+g9deri0PdXFydmCsWpEOvY00F0iEXqOksKxRIDZSBaqBkNV+FSZjlgtRATWfEWNSiBQ+3Of3MH7IcxxdQQPp+No6haAAAAABJRU5ErkJggg==',
    positionOver:22.5,
    width:83,
    height:9
}

const logoGld = {
    name:"logoGld",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADjSURBVEhL7ZNREoMgDETRU/Qkvf93T9JbaNdJmLCTQIp+8maQZLNBQS0ex+d1SJhmpiciu1bG98RzZdfYZW7Y3t9NwsWP7HnsOHUdotU3wW+EPVz3YJ/X52nKv34Q1T1dNauz5tUkbb1csDPoacCrK6yN+ljL+i2s9TyZfhD5OXd/cws+cTTxpw6tp0t6m+g+M/Cz6d5GWgR7h4cJozaJdAENQ9JKpM/y1Hq6D15LNbs/T4tovLjokPql2Vlhj9fDeD72eh4Ju37WFVuzHtVtzeYg0iSsdRvXeg0Wtxn+5osspZydyog6jGHstQAAAABJRU5ErkJggg==',
    positionOver:22.5,
    width:83,
    height:9
}

const logoGldTwo = {
    name:"logoGldTwo",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAARCAYAAACb8i8UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD3SURBVEhL7ZRrDsIwDIPZTsFJuP9vTrJbDHmqp2DcpmzjJfFJiNRxk3aKenLM1/Ncwm627KnRWwu+scR3DJdpKOHXM+IW/BVt/QJRA+rRvEN9bp/TSOqPSca9GnB5olq2T7Uevx2hCMYJRh0raC29LHdT60PSC3CzHgqaK1rTt5LW4w3jARnrodXj9ijOp17nKWHTv+ia/DXSEfrzixwxlh8d7Xc2P+y546Hx5CHm0xd1/IN4QfWBrEb0HoIWdA2otXKRml/XL3+F0DA25dfNtBrPeLvRYlxH3TVsaa6Ggtw6l3thI34hN6/MleWyxn9N0/zj/mm4AQnwbH7s/42pAAAAAElFTkSuQmCC',
    positionOver:39,
    width:48,
    height:17
}

const logos = [logoWhtPlate,logoBlkPlate,logoBlk,logoWht, logoGld , logoGldTwo]

// const logo = {
//     imageLogo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAAAbCAYAAAC+wykZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFzSURBVHhe7djRasMwDIXhrO//zlsN6dCNWp3KjtvD/8EolMiWOoREfo6e3/Nz6J412yfnNsuuGq+81+n/uKWW2/kJwBRNDpjrNvlYOR5/AJ7b0i9McsAcTQ6YG2tDfOOXydaL7G2h+hax8nyWp5qbqnNvpP4OUafGFflElXMyldw+uUY1dkUtL3NgkgPmaHLA3FgB1BWis37Mio0652fU2NV5qrG78qlQY1fcdWX+0ax8pOeZ5IA5mhwwN0Z9ZfRvWTPu4vOZTs7R6roq+cyKjd9n1LuiyjMZNVbNJ6PGqrlFlbviM5UaMy9zYJID5mhywNwY6ZVVobNmrIituDK2U8uK2MqZmU4+FWpsp8Yr84zUnDt3Zf7PZJID5mhywNxYDeKqkMlWiFnrR+X5LE81N1Xn3kj9HaJOjSvyiSrnZCq5dWqMsjMzs+6KOrW8nT+THDBHkwPmxkivrBAAvhSTHDBHkwPmaHLAHE0OmKPJAWvH8QfOXXo0hDC9DQAAAABJRU5ErkJggg==',
//     imageLogoBlk:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADQSURBVEhL7ZNRDoMwDEPZ7n/nTR41cq2khK6ffRJreXE6KHAkfNr4hJmejOpaldyK6yqt8W6j82rj5qS0H9hM7DoPwrk/Ec94PcJzUV/kyNM8yOqRp1PvLqoRnv+cF3QEIweiOnF31+eumlfcjTKVfpDlu/PsM1fwiqPJX3W4kV9F9j8z+LXx3u5cRpetbCaCbFLgcDiZn2XVerwPX4tO7y9yGV0WPzwI5+qAZ6IeJ8p5NsqQUd490Zpm6LWm5yBzRGucX/VrsvmPyme+KXEcX8+nfqRxyfOLAAAAAElFTkSuQmCC',
//     imageLogoBlk5:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ8AAAAtCAYAAABxl2ZeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHZSURBVHhe7drBbiJBDARQNv//z5uMxGGl+OCNnZoGvXfhEnB3gVQaOX8eGX+fr/9KzT6FDO7zLtm/4j387ve9RaYfz1cAiFE+AMQpHwDilA8AcRZ/ORav9/EPB/fxu6fkyQeAOOUDQJzyASBO+QAQdy3+qoVgV3dx2F06bi8nJ5/XzWU7g22Je1S2v7dKIvuT7luZzO2aZCD7/RknZfrju3nyASBO+QAQp3wAiFM+AMRdS6Xt5VViQXbXjErifF3bM07PZXvGu9x3YnvGSWd+xfwqd9139fM8+QAQp3wAiFM+AMQpHwDirmXRZIn0FouvL9XndSWyqpye8+S+d82o/q5r+8yVyXu7tmds37dre8Z2BpXJmav3TrLv+vHdPPkAEKd8AIhTPgDEKR8A4q4l0GQplVh8nTRj4hVnJDI9acbkLF2J+05sz0hk/4q5VLazSpy569tZPPkAEKd8AIhTPgDEKR8A4q7lU7WU6uour+5akE0+r5vLdgbbEveobH9vlUT2J923MpnbNckgkX2le5auu85cSWT66/l58gEgTvkAEKd8AIhTPgDEXUugyfIKAP6bJx8A4pQPAHHKB4A45QNAnPIBIE75ABCnfACIUz4AxCkfAMIej08k/X5RCrIrdQAAAABJRU5ErkJggg==',
//     imageLogoWht:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAJCAYAAABOpxCRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD4SURBVEhL7ZPLFoMwCAVt//+f21w65JCnHO3SWRgYCNZUjxmfAmGaK3tWZGdl+rKzdmRnvFkbXgXCh0L2PN46dQdX/4noRMwVC9IltG33oaazKKX7BeWhjp7OEqjB+SpMFkjbXruAx1knPI7O6V3MPd45X8XORXq369nVIu76Wp9PP/OIXnFt6l91ObHypLdh3HCfKzCq/jbNRG3dir739DDV6JtQhpwgraBvP7jDuL8cJKOaWajm+VDDM8+g9deri0PdXFydmCsWpEOvY00F0iEXqOksKxRIDZSBaqBkNV+FSZjlgtRATWfEWNSiBQ+3Of3MH7IcxxdQQPp+No6haAAAAABJRU5ErkJggg==',
//     imageLogoWht5:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ8AAAAtCAYAAABxl2ZeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIKSURBVHhe7dy7riIxEARQuP//z3sJ0EYVlLatZpg9J4HA/bCTlmXE87Hgz8v761/Pl/fX/4Iz+Jy7nP037uMuZ38ldznTn/cnAKwxfABYZ/gAsM7wAWCdh78lHl4/5y5n/437uMvZc56bDwDrDB8A1hk+AKwzfABY90wPgq324bB9dGzXtSb5UmwyydfGTmzsI5nsbaPnSWzS5kvaGsmkbmtyBim27XlSt9XWSE7vI0k1Ur7TvZzOl7j5ALDO8AFgneEDwDrDB4B18QcHk8emFHuXGkkbO6nROl1jkq+NvVKNdl1ypRoTp2tcqecr9TLR1jjdy+l8bj4ArDN8AFhn+ACwzvABYN3lf3CQbORrtXXbntte2ti0rjXJ18ZeqUZa10r5kraXZBLbOl1jki/Ftk7XaPMlp2ukfCm2XTeRaiSprpsPAOsMHwDWGT4ArDN8AFjnHw5eJrGtb6wxydfGXqlGu25iUuPq/SVtvkndSWzrSjVOr9uQenHzAWCd4QPAOsMHgHWGDwDr4g8OWu3jVaqRYtt1rUm+FJtM8rWxExv7SCZ72+h5Epu0+ZK2RjKp25qcQYpte27rJm0vrU/1nKQap/tL+drYJOVz8wFgneEDwDrDB4B1hg8A60b/cAAA/8LNB4B1hg8A6wwfANYZPgCsM3wAWGf4ALDO8AFgneEDwDrDB4Blj8cvacT4Wo+okn0AAAAASUVORK5CYII=',
//     imageLogoWhtPlate:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAPCAYAAACLKbN4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF7SURBVFhH7ZgxbsMwDEVtAwE65DjZO+cEuUiOkUN0TOYuXXOEjDlHOxTo4OY7+i7DULIky1P1AMPUF0nLlCBHaRvBof/pnZnN/vTtrHQOuxdn5TPn+TGkjnHfrsYaDwaLvPRA/yOcHBS9G6wbtdDLIOvaYVVPFbrfrZ0VT06Mj9hcMX4lxpWaY6jv8bMfV3aI9vTlrArIrcdTsTFrvAhtPaPaR/dbaD8rztJIqj/w9Vs6NalrzeojbEsNvL5dn4sNMHO4dIDUcOcM07ZiJNJPtxkXyjXlbxHqp27lor+lEZ075Au61A8jkjCpBFpIL4XvOTnosfHdpjQfU75Re7YEiZhUAg2XxqfnUiof30Pnoibfz9J8hHxbfCWdPaAfAjgw3olsM07HaCw/oPMCK1fIH0idyBgrF2Af8fkAK4cvnmDPNoutHSvzwMHmfXu5/c4ucESuxDEe1+sJchm4qs8fm7/jel3hZUE9WWjy8K+f3L+xoVfmgxV9t5rmF6YSSRdFYxCaAAAAAElFTkSuQmCC',
//     imageLogoBlkPlate:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAPCAYAAACLKbN4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVFhH7ZgxUsMwEEUdVzQ5ByUNPS0U1KTkEDkGh6AMNQW06WkoOUcauqAv6zvLsitbioFh8JvxeP139S2tPXacRSO4uHzZp7Bne3uaopC/f0vRAZknVh2x6kvwvI/1LaFofatl3+MYsMnXT2fYDbJ+eE9Rx93NSdxrnTCf45ixOTzf78Caa3/+0PS+2Wj0T07sv4ALEPsamt2OavRqmYICasZ4jPUaUzfFvAo80Nd4x292+zZpeTa7FMxEKvvxtdm4atwIY31FdY3OW+g6a5ylkdJ64OUtnZrUtWblCI+FhrsbL9XWfIvjymGTJkBq2PMKM7bGSGSdPua4nNdQvUUuT93yYr2lEe2dqw2Me4xIYEJTCbScPhXeeWrQc+PahjSPgdrY7KJfITCiqQQaNo2n1zKVH9ehvajJ9VmaR6Z2ERKfP2T0SQAnxj2Rxxynx2isOqB9geWVqwdSJ3KM5QWYI14NsDy88Qk8s2Oz+9+CQBrNTAL6+3j1WvHMnqmm+27Xd/fMZPCu3j6fd5/raDYT4C80nXP1+O01cH5oNDg0m4iXZe6frZnxoMld1DQfXusJBcV4isQAAAAASUVORK5CYII='

// };

const backgroundSquare = {
    name:"backgroundSquare",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEwSURBVHhe7dExAQAgDMCwgX8h+MMADx7yNE8FdM25E2f/BmkA1gCsAVgDsAZgDcAagDUAawDWAKwBWAOwBmANwBqANQBrANYArAFYA7AGYA3AGoA1AGsA1gCsAVgDsAZgDcAagDUAawDWAKwBWAOwBmANwBqANQBrANYArAFYA7AGYA3AGoA1AGsA1gCsAVgDsAZgDcAagDUAawDWAKwBWAOwBmANwBqANQBrANYArAFYA7AGYA3AGoA1AGsA1gCsAVgDsAZgDcAagDUAawDWAKwBWAOwBmANwBqANQBrANYArAFYA7AGYA3AGoA1AGsA1gCsAVgDsAZgDcAagDUAawDWAKwBWAOwBmANwBqANQBrANYArAFYA7AGYA3AGoA1AGsA1gCsAVgDsAZgDaBmHiGhApsHHE+xAAAAAElFTkSuQmCC',
    width:128,
    height:128
}

const backgroundCircle = {
    name:"backgroundCircle",
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM8SURBVHhe7dxdUtwwEEXhIe/ZH0tkf1lAki5GhcfjH1luSS3d873AQyoY+qjtoYr5eMzq68/f52c+Pn9P+bOa45vyHnauCaIY8xvoNfAzAwYxzgVHHfqeQWKIfZGjDX1L8BBiXtwMg98SMIZYFzTr4NcChRDjQlQGvxYghL4XoDr4tY4h9AuA4b/qFEH7L8rgjzUOoW0ADD9PwwjafCEGX6ZBCPUDYPj3VI6gbgAM30fFCOoFwPB9VYqgTgAMv44KEfj+hwy+DccQ/AJg+G05ReATAMPvwyGCX8+PEHV/A3D6+7q5Be4FwPBjuBFBeQAMP5bCCMoCYPgxFURwPQCGH9vFCHgVIO7aBuD0j+HCFsgPgOGPJTMCbgHi8jYAp39MGVvgPACGP7aTCLgFiDveAJz+ORxsATaAuP0NwOmfy84WYAOI294AnP45bWwBNoA4AlCysdnfA2D9S2EDiHt9KOD0a1g8DLIBxBGAuJ9bAOtfy/M2wAYQRwDiCEDc9zMA939N/58D2ADiCEAcAYgjAHEfPABqYwOIIwBxBCCOAMQRgDgCEEcA4ghAHAGIIwBxBCCOAMQRgDgCEEcA4ghAHAGIIwBxBCCOPwxRxh+GgADEEYA4AhDHO4So4h1CYAhAHAGI+3kGMDwHaOCNIpEQgLjXW4DhNjC3xfo3bABxBKBkdfrNewAb/wjzYgOI2z/tPAzOZWezswHEHd/v2QJzOHiuYwOIO3/iZwuM7eRVHRtA3PkGMGyBMWX8TicvAEMEY8n8hR63AHH5G8CwBcaQefrNtQAMEcR2YfiGW4C46xvAsAViunj6TVkAhghiKRi+KQ/AEEEMhcM39wIwRNDXjeGb+wEYIujj5vANrwLE+WwAwxZoy+H0G78ADBG04TR84xtAQgh1OA4+qROAIQJfFYZv6gVgiMBHpeGbugEYIrin4vBN/QAMEZSpPHzTJoCEEPI0GHzSNgBDBMcaDt+0DyAhhFeNB5/0C8AQwbdOwzd9A0hUQ+g4+CRGAIlKCAEGn8QKIJk1hECDT2IGsDRDDAEHn8QPIBkthMBDXxongKWoMQwy9KUxA1jrFcSAA1+bI4At3lFMMOx3j8c/eX7bVNDd/UAAAAAASUVORK5CYII=',
    width:128,
    height:128
}

const backgrounds = [backgroundSquare,backgroundCircle ]



// Roofs

const roofBrixDRoofLow = {
    name: "BrixDRoofLow",
    width:83,
    height:6,
    overAddition:-8,
    downAddition:0,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAGCAIAAAAwkzUTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACESURBVDhPY9xhu4uBXuDKIUcoi4GhZOUPKAsMdkw9DmXRC6D4HNllyADNlRQC+wU3oSxs4GCCOoTRE84BYWAFxDsJzRwdu/0QBsLnQG9T14eDEwADAuJ5Jgh/hHgbCIDehCRtUJxT7m2sCRiebmkK8OcdNIDsJMae/7+hTBgYEZHPwAAAim81IwHf9TsAAAAASUVORK5CYII='
}

const roofBrixDRoofHigh = {
    name: "BrixDRoofHigh",
    width:80,
    height:23,
    overAddition:-7,
    downAddition:-18,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAXCAIAAAAX248TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGlSURBVFhH5ZjPK4RBHMZnuSgXuclN4YKDXP1MuVBuCKXkP9gcKAeF0vsfiLYQborDkvw6ywEXlKuro5LWd/d5vN4d8768ad/03c9he953Zpv5NPPOTJPKdh6bT+4ue5n+QHrvlekf4I1UMRVo6TpDoDaEE+ux1RsnpegM2hX5L2000525z5f/joupZiZjRvdnmOKwO7zGFIdYnQwiHRZzamfqN4LNH91MMylioG2dqTBC1H5+SfOdMXPtq0yKWL6eZTKmrsZzaJ9uPTApom+iicnSxocqn8354iCKNdGzcOgLurW1TvIftLVOcl9QfvPaK9W1eAVyDY1Mikg9PSKEar/3HzApovJkCCFUW/2+Lea2ttZv2x9tQRwrGLWDue3DlRyHUzm1yZKudQOTfQuaZTTaFo7R1rpvB0eb2jiuQFvr4bSsJ7k4Fx1O5ZU8q1/SorRvl7ZRO5qIe5+wa6NS31s5222dH4e2r+nQlt+Onc3E7tUSAGtWkbaXe0OZAFWphEcLrAdBwmo68f8u0wwhjOBJ2aocLBKsUvFh+oYMJJMxV2OTHw38FDyhGVdSAAAAAElFTkSuQmCC'
}

const roofs = [roofBrixDRoofLow, roofBrixDRoofHigh];


// RACKS

const rackShort = {
    name:"Short",
    width:23,
    height:6,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAGCAIAAACnwpLJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB5SURBVChTY9xhu4uBgcH9kOuRI0eADDRgY2MDJLFKAQFQdqfdbiADZArQCAgHK+Bu4/xa9R3KwQAQvYyHDx/+tn0ykM/lmYuVgUwCBd1aV+6qDkdTRpRb4C7HBBCXMgFZuLwNAUBF+BUAARPQMCgTB8CvAOhM7jZOAOxhQ9+JB06QAAAAAElFTkSuQmCC'
}

const rackMed = {
    name:"Med",
    width:42,
    height:6,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAGCAIAAAA6z5tBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVChTY9xhu4uBgcH9kOuRI0eADFzAxsYGSOJXAwTEK9tptxvIAFkPtBvCwQ+42zi/Vn2HcnADIpVBLGVOX5p2Y2Ypo/w57gzrP79m4GGwqpoDSWopu7tvDZBBmu/hgYYHEK8MGEhMQBbBqIIAoGpiVBKpDAKYgK6AMgkBIlUSqQwYQtxtnABgQHQrcCybLgAAAABJRU5ErkJggg=='
}

const rackLong = {
    name:"Long",
    width:67,
    height:6,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAGCAIAAAAXPbT7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACMSURBVDhPY9xhu4uBgcH9kOuRI0eADILAxsYGSBKpGAjooH6n3W4gA+QToDcgHCIBdxvn16rvUA4RgNbqIe5nTl+admNmKaP8Oe4M6z+/ZhDDYFU1B5KDR/3dfWuADDLjBB6nxAA6qAfGIROQRXyihACgNpK00Fo9BDABPQRlEg1I1UJr9cAI5G7jBADN06XIGTO3oAAAAABJRU5ErkJggg=='
}



const racks = [rackShort, rackMed, rackLong];

// RACK ITEMS

const rackItemLongboard = {
    name:"Longboard",
    overAddition:-34,
    downAddition:-4,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAHCAIAAAD7z+a2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABrSURBVDhPY9xhu4sBBi4cTgSSBrbzIdzhDZigNMzbyIzhDVDiHAjg3h72MY/ucyCgiudd17+BsqgHdgeKQFnUADjjHAJK33RDWUMBkBQ0CJ/TIpYGFUALF8a/b5ZBmcQB6iY5KgLSYo6BAQCcbiXr3+nkYAAAAABJRU5ErkJggg==',
    width:83,
    height:7
}

const rackItemShortboard = {
    name:"Shortboard",
    overAddition:-14,
    downAddition:-2,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAECAIAAAB6GUoNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABCSURBVChTY9xhu4uB7uDC4UQgaWA7H8Il3xGu699AWaSA3YEiyC6AsHE6gjw7SALdIqVAEugaxr9vlkGEBgwwMAAAADYWlcQikcUAAAAASUVORK5CYII=',
    width:44,
    height:4
}

const rackItemLuggage = {
    name:"Luggage",
    overAddition:5,
    downAddition:-13,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAIAAACwQdIgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACxSURBVChTY9xhu4sBDB7/KQeSvx89hXBZ5aSBpCxLJ4TLBKEgioDgq7sYBEG4cHGoOjjg3vkKgqB8GGDsTtKBMvECkHk3r0F1wxlAgCaIbi8uwJhiAXUyfsDyy9MPSP2+fQ9IsqoqgQWhAFkQai+EA5HQfXgCzobrRLgPWSmm8YyRMU5QJl7AOE2aKH8wrgzxfXv8pLClOVQAA0BkUcIPKARlobKBAGQelIkhh7CEgQEAylFJV4j9aPgAAAAASUVORK5CYII=',
    width:13,
    height:15
}

const rackItemRedWagon = {
    name:"RedWagon",
    overAddition:1,
    downAddition:-12,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAIAAABPZMCZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAChSURBVDhPY9xhu4sBBjwOuyFziQFMUJoszUCA0E8egOonz3IgoIb9ZFsOBJTazwjEHQzSEA4QpMhwQlkYYM6T71AWEgDpBzr+wuFEZJ3Cj28DybeyqkAGhIRwwZJQADTOwHY+KP0A/Y/sBOIBVD+QBTTC2NgYyGjlagdL4QPV3yqBJEQlNPyAms+AAUQODwAqQFZJcfjDYx7ZVfgBQiUDAwDhI0YMlPv7EAAAAABJRU5ErkJggg==',
    width:21,
    height:14
}

const rackItemRoadBike = {
    name:"RoadBike",
    overAddition:-1,
    downAddition:-14,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAQCAIAAABlb+OGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADVSURBVDhPnZPBDcIwEAQT+NEFNVjiR2GIN6IHuuCHKIEmKAKJHxKL1lqbOHe2M48kdtbjyyUZb/v70M/xfThtznEwx8+LEAd+VDHgJ8EYQmCIy6oLHuvn7rONA5tVPDcYu0h9gBe1cLaKSraa8/fe6PUfU3tfXxccc1feySVeBJwk7FCn/nbBYlV7ydTLWpwFgBWx2DKJWwjM1IsFLXZgqYHZh0a7pa7017drnvac6fdQJoTU3EnXvBDd3wMUtKjGUipSvdYTWeR/AclnlnsJXSTtMQxfb+KPk6vtjV8AAAAASUVORK5CYII=',
    width:29,
    height:16
}

const rackItemTree = {
    name:"Tree",
    overAddition:-4,
    downAddition:-12,
    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAARCAIAAADGwLIbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGRSURBVEhLtZU9TsNQEITtVJyBgpIyShGJKhUVN+AYdDkDEgUH4ABIXAAhcYNUlJQUnIEKMfZn1uP1jxxkRtbLvP2d7HtOyufdS1Fjv7qGgNvvx4bVkDdZlsWq+ayxXW8bZrJEnjZ38P9DRweQGgSpvUSEOJRhjO1S6Og4vB3oKoIlIXozoQWltDrGjn9MkyDRkuLj+bOy9p4KVFF1evtsBueUAtx77KUeuB9CNIjSQXABDwDy8sScZiLrUAkvTVdWSGoMIsyVaatrNPNdq86l3D3cv75r83nyMd0Jl8ek+MEt6/RJVfOQiJvLcz2nX2dYAyrRMBPBVsS9cLqGnRSMnFS89gnl1cWmofU8IErzrhSCVO5f9MNqcwfEEAC07c+m875wlqTFimsCLsJTJop4CpryPcXnmcohjRUE94rAwwRcMrpdRj0YOan8PycHEWklRvBt8D6Ba/VcYey2tvOINGqxZYUEF9h6D/eC8Ko3j/jgJRU684jSqYfQt4zBI8e+fR8Dv+tC1PJCeOeXPgJF8QNL+CxETAoReAAAAABJRU5ErkJggg==',
    width:45,
    height:17
}

const rackItems = [rackItemLongboard, rackItemShortboard, rackItemLuggage, rackItemRedWagon, rackItemRoadBike, rackItemTree];

// CARS

const bodybuggle = {
    name:"buggle",
    family:"buggle",
    size:128,
    CarPositionOver:11,
    CarPositionDown:44,
    SecondaryPositionOver: 50,
    SecondaryPositionDown: 35,
    ArchPositionOver:16,
    ArchPositionDown:67,
    FrontWheelOver:30,
    BackWheelOver:99,
    RoofRefOver:59,
    RoofRefDown:40,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAjCAIAAAARyBMdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASmSURBVGhDzZo9aBRBFMcvh4X5qBQrwdYmoKCiwiWiIMbCSiRNChtJYRkbo0UEYxBMKRJsbC1FIVELNXegFoJCQOyCIAiCVY7Y6f/2Pz5eZr9mdvYjf5b1zezMm5nfvJmb3Ti0NvGqtfu0sX7WWEm68fSPsZQeTO81VqTxyTfGqkW7hWMiuERe7gJZelh7+J451al5jkIQY5aRu4th6FILJasL0oY5EqKmcObJN2O1Wu+uHtZJLTzCnRBP9j5EebYmfhw11n+xfBU0m+cIiIB199Z2f37b5OZpaXQf7kAJLoCYUXH03vDtxWFCF1URmE1yFIg3+78xYHeOkKB02fukMJNQ6YHZNv/WLkB8fvELIZosH3nVQmGrPOYPl2zN4WqMY/1C5FrBC5RT10+XQrMZjtL1YsEYIqDsHvxsEpFKCcwGOLLTWNRMQr6bY6DQFlBqmuEom4lH9Pvt6jH8Rpt0IVm/wl6KT1sgymo5YvfhhS7KhXz8vPR6vU6nw2IhQiwby1/oBn+4qRCU5Zx7QMpYecJqwoEOBoIRHF9OvoZdYF2jysfOKYwcDovtCfDAnlxaPQI/zKQKHDCD4lHCzaQdxFMxlyRCkpm+0jGIlxYkeZmsTElh/bYDcBKYMAoEZpF4zAaHxWKsSBm7mF5TIis00sTRoq0Cu6TVQ4hO4BO/fuIQSfeo9OCYhi/eLawUY8WEwSfi85KwRtMZbVlynCE9N+4onTgiyKUTIRSs2aZBZQwysUWWF47ZjHL7rKszLHxR5nDkNuEIMXcwmqOvdNQLO3LMbtdRGl8cJe5sJe11PoujhCEd6ZMz5EskkKMl6VJZDvU8wWcaShiJ4ZnKUUMkQTilO5FXIKCuV/lcsWO+HIVXfDiUDhc6txpKDMlkjoT4d3oMRxOcVPRensGC3RLoUZ4RHzXOkRAzhqPJinM2BGPr1yzuiyNLg8c7lcBRQ0QSx13c3REITT1CZJYLkQIXd44aYm5nhJ34Z/U0lDZHDTFO0JouYyVFn9UJ5riP2UW+PgHCgugyHJkqb45zrT2EGCeYdgKwPjizsEZZBUdIBumr3OFot5yAuYVx2MdfjOEe52i/FyYGPFpFkxnHqPjXZtwdd9UaBBAYAtlBLsNh9IkQBMsLG/fvbF359NNk7ZTNkfV1MLJV2hmy2o6jbEqMJhgyogLDQXhK9bEDKzS0BhwvrJ9ngsKiljrw5dIqlYhS51SkjCbwyJrLtIN0XLLIZI2vTj2joV+RSa/NzySz36/hjseoIx9C0Anx5Sjf8mUpd7Y4qe4QKV2eTQAlEMEGMV4IO6Bsdzodnm+QpXuT27M06batkCzsM1uMl4qcwy09oxVpaPPr5eihEQC2CXEzEnMh1iwluKxBihEuuuJdBqlltVWsaQsCWyEuil/1h7rdblRgIH4fpkIgWl/YSmRXQNgfZVkUG1T8vxHov5FxQZvzI3fJmZmZ6NFAK4ceG8tf8fOXsWqX1Y3CwUGUWvqPdP35bXPugYUrhJ0ldFrwxVdc/Qqcy/gEkBgvJO33mbJkTSBQnlg+ZxJ1aWT/I9zRNCGG7FS5qokjFPjX6mKSHb9SiK1W6x/6jEwfee8XAgAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAOCAIAAACwxuV7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC5SURBVFhH7ZaNCYAgEEa1QXKSxolmihaJxmmSBMX0VPw5oVN6BF2gct/LSH4uF4uz3auuXPb50FVX1MWJOootZ+hLEybOpO8uyRUlOWOIgIwTcJQfvgtN+DjQUWls4pqaxAl/a0UQ14THcTR82hx8Ca+jX1AMLoTQJQKy54DqF28ngo6K0poO6DvK6RAINVMS5+wklDVV9AY0KbD/tTF2kAEMlo/ywu4jie/+K3FNOlGL2BMbOBocxh45DFe1h+5b2gAAAABJRU5ErkJggg=='
};

const bodykeegle = {
    name:"keegle",
    family:"keegle",
    size:128,
    CarPositionOver:11,
    CarPositionDown:50,
    SecondaryPositionOver: 50,
    SecondaryPositionDown: 35,
    ArchPositionOver:20,
    ArchPositionDown:69,
    FrontWheelOver:29,
    BackWheelOver:93,
    RoofRefOver:53,
    RoofRefDown:46,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAeCAIAAACgx6cUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANrSURBVGhD3Zm/ixNBFMeTVMpdJVj5B9gceIWgQqIo6J2F9bV2FiIEtIlnoeAPBK3EwkpbawtPCw/vAmqnIIh/gJVw1UUthPhNvsO7l5nZ2dnN7uzhh7D3Njv7Zt5nJ5ndXHuj97bVKF+3zppolhsv/5jIYePpBxM1SpPuaC3gyOXR2gETOSemF9qYu4X7B0c3f69ePYX4zIvv2A5GO9MjNg8WDjF4f/koA22QaI/JJDbgDtawhTjMO6k5vmBRCS69PmaiKci2feQzY+RnUB+p3XG6IRBxRaeJZBBoU2YlE7rNKiepO0tcuQ9XWAq/BEQftvUZ7Ji/9VOJuFyYlgbRHV40WAeJ3KURR7Q+QH11GEzhLqU4gi6wdmt9dUzA2t2lF4eOsHpw6RB9oPIJ2K51rcBAP3VPMj4x/Ihtt9t93PrLdyyWTm+aKIhcDAGyTDQFV8hEU9ybQRLZXYBq3Fmj1+hKePPV+7HM3ayqBMsCQRLJoPFmkww8au0K5TwWcxfpSJAh8ii+g+QuzCLLo5s2JgnOykpo4bUZqTLkzjXlFeSixyGnZNUcWaSAhEzlPdHrohy5Bm13gZml4RDD49OitbgSVelUxNKnG8Tnx1kxjbMkGneRyohbCcgaBBoHpkku0pc8qAJ835Wexe7gCw1Me5y4W9k6L2uf18ucZNVZFORhgGzenF4LRSvKVSn62uPxeDgc4k6iDmuJ0WVXWA7TMiFj6jPuvKu+i1x5UslsKkF40tU9CdDR9dtLb9496UCceS8PPBIMRjv6hRosmy65Daolwafn1cUvD+/sIuhY9+heYM37LCUGzX7T5IpjIdbLHItGpvzkeRb6AvXnZoc+tNk/Br0ENAUOZbHce46t+S0A9Y+/HWesiTeyryagRYwatMH4+TJvZSANjLuVc9ew1WcyhhHuxpBGH7rwLhTuB5YlxM8pKTa3Cv4YY+6NcYs3fbMlS8ete5PDhdwB618HwFtqAFkus8BXNRJazSxxUnzR8QP9vySC7sZri2ZHKdp7JtM/bFEcKOcOiK+i7nLJTahnTSXuyN31mUW13+/vuQPrvwYMFg8/w7ZEx8B73Uw0NwFxWhkpN36QpW/35xUTTZlxR1a3LzBwD8WQ1XF6KncHdE6Puzn5D9zJ7NG4oqp35+24ESovbYZW6x+7NUn5VHdnEAAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAALCAIAAACMDSbNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVEhL3ZTBDoIwDIZZJxpjfBqvcjU+rwezcPWtIExLVrEBZR2JWPkSAiPd+L90zLiizBjn24menvQKFsPLfOjM+SP/tyLD/GSO1Ta3Td2Et59Q7j/ePITnB7zChKg2El36h0iy8RpD9xQUdj6hJSZzxzb/Esyn7UQyj8rw1TWbj2fr73ahiU751FRdPcgdQiWsAfIp/8j3WG0S+teVtWe7HJzmK+/rO411ANbK+4dQC8NATtI3ZmC7310OVxqIcUX5AD48T/z+vcpTAAAAAElFTkSuQmCC'
};

const body3cube = {
    name:"3cube",
    family:"variable",
    size:128,
    CarPositionOver:11,
    CarPositionDown:47,
    ArchPositionOver:19,
    ArchPositionDown:68,
    FrontWheelOver:30,
    BackWheelOver:94,
    RoofRefOver:58,
    RoofRefDown:43,
    RackOptions:[rackShort, rackMed],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAgCAIAAACXXGGzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPGSURBVGhD7Zk9axRRFIZnrQzpbP0BIgimsFDYjR8gyRZiaWsvdmlMLKM2WsnW2lqKRTYKinFBBAUFQfwBYic2SyyE9U3ey9njnfs5szs7iA/L5szsvXfvPHPux2w6w97zogV83rtoohw2nvwyUW3uXztqoqI4tfrKRMks2KPom6GR+tBpls2FeVy+u/SuexZB2eD5x19N9Devr58wkYfciuHysPms/+nW+AdPhlmMR0gcb+6v3zjHKwn0FSVNVBS37yyJkTfHPzJAOwx8oIXcivzS3reVaPeEBXikRATwOBy8lcMoKIkURv7CRWIVIiqzKqIWVaZ4PGL+NoWWyDPpZLnTVKuIWvAO+/eWj5lTfhr1aElEMh6ezqaCF45r5BcPE5EviqpszqMlUeapZqh8z1BR5tYATXiEQZFIZJ6yzreZcErO3SNNiSxZoyuApqwgnTp1OUuaAw/z9Wg9pVDi9tZUa5Nwd40pMlclestZKJCSc/QIa9ijYMOBfuPFaZHwjDmIwcJ4ySohbeLFMwHKxbB5SqkuZViMKelT2am5fxQ7+vlUkGcVayxf2TltIhes5Rz+Mr7Kn1pDL9yf8KdEl9Fdcm4nIx5Ttk6alKWt5TjvnwbXWF79bY8yo+HREu9OL9Fv0qCF9PIozCywUgNwhup2u6PRCAPcmVBCuTrJ6rnGGkBof/LlDILdlw95ZuqRBn09aAO0EEj5sFwB14imeIPlHeejJ617rFUaj2t7lx8Uv5GDrPyfKDDbH15FsNJ7hPepR4wXrIOIfSpR00QuJPPDGR1ImTYPhTIRjzPPR44Ic/APYXk0+0dJxvaTOAk2wM76UxPpdYZbnEDu4A5Yy1ZgTRdmno/wWGce17chpf8+cF0MuJ20PYJyu2LQ+S+L8A1oiUfRV76EaAI5sTxOnwt9v/pSIr7e938fVMQLxaTptgGJ7L/zEqT/5jiBcmHjce3STbwY60KMfQY1vA0NqMxd1inRHPhJTwVnGeMRm8nOyfeS22yRFSgoBVHp/KaFgJ5wEkwhJRV8n07HNZ4Zy4XSJRIpPyeVepWIwj5kXYJOBXnxI6BjIo0frDPYPPKgvPvJ9Qj0TxtIcHz3rNYZSOSgjrapL7jmJTjZ3jK/n+J5H++7qy86k8kEEQwenjcfXOh/wHuFHhC99M/QoxBoUxsE1S4h7FEkag7y0fo5czAYfP+5gaCyR2CpZFwHEaclRluunwo+tM3x5v50/6hhK63yWIGZ9N9JuWW3x/qgH878bwxM9HU85jIvjyA6NOZKkxKLovgDW250GcirjlwAAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAMCAIAAABp6O2CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC4SURBVEhL5ZbhCYAgEEa1QXKSxolmihaJxmmSNCXtlLxTqoveny4Q/e5pmJy7RUQMa++qgLGdXPUF4hau80MRSQUhzHUU52/ccyc7iwYz5i1q8nsR+A45u8CQzO9EUHtj6IIUKR58+jR+BXBhRJRtL6tDUR+m6kSwclFAmN9cn+E75nakjr8bsB/ZSMn8UillKw2+q2MubiKQeYA7jT8R1JaYuCiwYAFdp3+xkQCvjxkB61qqVhdiAzrQWGkpXv5LAAAAAElFTkSuQmCC'
};

const body039 = {
    name:"039",
    family:"039",
    size:128,
    CarPositionOver:4,
    CarPositionDown:45,
    ArchPositionOver:16,
    ArchPositionDown:63,
    FrontWheelOver:28,
    BackWheelOver:94,
    RoofRefOver:58,
    RoofRefDown:41,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASYSURBVGhDzZk9aBRBGIbPVGqsJIIoeDYxiAEVLQwYf8BCC0G0SJNCBLG4JkXE30rUCKYIyBUhIBYWWmhjYbTwrxELC0EQSSNCKtHKqIWg7907fn6ZmZ2b3b293Ydjbnb2dnbm2W+//bkV86NPa9Xm/auDpracyfu/TC3IfPO1qZVNpV0fboxMj61EJVKry/47H1FeWPrGxXKpruv+66tQji7uQElleXh5cghlueor6hqily7+nOpfizo0ieuwJv7ehaIF9FaK7sq5ZjiLaEih9/bK1Fz6cWFmZqbZbJ5cPIVFJCW2C73M5n3muxpQqxbN9sxAtKm1gVlLbtKpUARViWsJZ5SW6DxxjW0nJiaurZ4yywqE/OjObTOHmlzsQWKphGttk6e5RJ8+BmmJ2XZ+6K7oJsVJL9m1pcMSDfRhiAQBi5LZI3LbyaXzWzasfzh+3ywXY7zMfE2PAdE5GR8fp/eOTPffQHn87hgXAW5dMB73WpqHclzDshWwmBUfW8idjbfxwW/e7N1jmgrm6+8r+JgFRReNl5BDrKHLvfPRx9tRDu97DstsaTQa4hrtrISRBIL7PFTuHZurnxue3TTXXulBAn/Nulm5DeeQrLtykPOcK9y1vM0IP2dzetD96Mg7PUkd7JqOT+1JvlKh9449ss/MeTy1a/eEksB0STvV8NsPmXnk6xEMLJvr8I7YbYYYD7lGurx8rXWf4I44c7gB77ayIdYitFkHkbICdpKGKkQeORdITxXjia4hGiVcZwuNMOFDxRMlreUkMqt0wb50b1yMD3C/a4q27gGyDdpy0cWZa3QeKyI4BD0dzIW6IwPc45qi+TIzpynZvCDFAnOoWQgSnhHX6kbdgnrSRGJ0d3AdQIeSS57gsnSAVIfK3dzF6tAyNdW/1hq/1ae1uRyPsHG/60jRgX7d4YIYCySV3DAdj1xSwuUrMJmF9OOOTa8K6F7mGr1fvdR6lrNcW32x3vGUscbaezBU7l0qFjGXNR008BAWzTrvo1w//11TDeDzG5B+2QUXA8fNRQ+0asTfP8TothoZkZaolmuxTD59OGFq/xgZaT2/LCwsoPS+Cw5QTd1pn0RkFjqKWQE0yx/8+bC73WZ48uyWqdVqfWc+n4Zc+ZhmH4ODg6aWEg6ldGQYecbjBjWAZa9oixX1et1Ua7XNWx94dQ8MDFA0/7XLAJ/sMcmyYlyHXtqgJuFMwv7FHkzKj+vnhlHObprr4zswrMOnvcoPE0hOsPs8MZUZLbqIAaBPdC5yAaRDMT9sQf5o5Wv9XpEVi+9fzqBMm6k1Oij0zItGzOq9x1/bNbyqeYctewknYXMfQt1vz75oN7aQ7UFXXKO0dJMuStfdCrp//iCba6AjRtA71TmEFWlB/ljmWr8v1+y6eQBlHtfAO9C0eG2CyJ6xeWbRQEdM0kj4gEKsfzuNa5J0mnTFNYj8MylpGhqeavFIeszv2kLnDV78+JIDhFwD0U2/Qn7RQC4MvcS6COV07c3Igf/YNLZr4BrpimjQRdf60mIROC3yiM6Px7Wg1XRFt/cc7CXVdV0ohXov16mfWu0vnAXPKhBr0ncAAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039Cd = {
    name:"039Cd",
    family:body039.family,
    size:body039.size,
    CarPositionOver:body039.CarPositionOver,
    CarPositionDown:body039.CarPositionDown,
    ArchPositionOver:body039.ArchPositionOver,
    ArchPositionDown:body039.ArchPositionDown,
    FrontWheelOver:body039.FrontWheelOver,
    BackWheelOver:body039.BackWheelOver,
    RoofRefOver:body039.RoofRefOver,
    RoofRefDown:body039.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARLSURBVGhD7Zk9aBRBGIbv0miMVYhVwLMJIgQUtDBg/Om0EAQL2yBIimtSJEiMpTGFdnJFCIilFlYWRguNWohFQEEIkkaEYCGIhfGniu/du35+mZmdm925n73gw2Xz7ezu7Myz387+lZfHn5b+0xH6kv+F5Gx17P3LM8lM71PcvB642Y/p+MYRTJdrrxtlvU1B8xqiN6/9vD7ff+reh6So9ymca1im6IWBQczObn59NfyWi3qdYrmmZS2a5TuDoriWdEa8I0WDQriWdEaMe48XEwdFNBYx2AF0+T6EKmkZQDSm+q5Dkj2ce8N3Ma1Wq2kbzv2YZTAyMrK+vo7g99bWrnKZJZiicH7PQn2NltJN14ZHWzSIcT01NcUSQImAcoGI9oPVJjYuJzNxdGcMgUFb9O1Lu5OZhi/8sM6bE8eTojiglSTzSrqH1ZmV+xeWmATxdCGvjabLHfT5x4cxHT35nIkJkJviGuUM/EhS12o1BDB19NbpxpLmMPc/f5vmLC4bDITIR6q2u5aH7OkHvxg4oXHofnTune6kTnaNvzbACm1fmdB7xx5ZZ+4bpMyu7RPK82iXtavsW5pH6XlT0QQNy+favyNWmyPHfa4xXOIpGYHd4tzpBpzbyoZYitRmDAJleeykNVUIPHI2kJ4px1NdQzSmcJ0vNfz4DxVPlKyW08it0gb70rVxNjzB3a4p2rgHyNdow0ULe67R41g7kkPQ3UFfqDswwR2uKZovMyNNyeZtUixwDE1mvPh7xKW6UJcgTutIiO4mrj3oVLKJSS5DB8h0qOzNbYwKDVMLA4NG+406jc3lePiNu10HivbUazcXhFggmeT6aXrk0gZcvgKTXkg9dtv0Io/uba5R+425+rOc4dqoi3HTU8Zoa+dBU7l3CQxCLms6aeDBL5ox76NsP/9cUw3g8xuQelkFZz3HzUY3tGiE3z+E6DYKmZGGqLprsUw+rl1Mor+MjdWfX/gCIesLsGLqzvokIr3QWcwA0CxX2Fo71ihLePLsThKVSn2Tn65ArvySYhfyqiwrbErXkWbEtMdOagDLTtEG5UqlkoSl0oFDD526h4aGKDr320U+2aOT3cpxnXpZk5r4RxLWL/ZgUlauXB3FdHH/Uh/+EGEZfo1FbkLeQDYFu4/Jqdxo0e1oAOpE5SIXQDoU88cSjB/18Vq+U+zdt8jA4PuXSUxjPlXopNA9bzdiVu89/Nqu4VXN2WzZi38QTu5DqHt1ZqVRWEe2By1xjamhm7RQuq5W0PVzhXyugc4YQe9UjyEMpATjxzbXyGtnz/m6PfITnLOhWXHaBIE1Y/PcooHOmLSW8AGFGF/vEtck7TRpiWsQ+DEprRsanmrhyPAY79pAjxu8+PElB/C5BqLb+HQULxrIhaGTGBehSNfOEZmKm2K6BraRlogGLXStLy0GntMiRnQ8DteCVtMS3c5zsJMU13Vbaav37jp1Uyr9Ae8FkhTYdOAFAAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039Cu = {
    name:"039Cu",
    family:body039.family,
    size:body039.size,
    CarPositionOver:body039.CarPositionOver,
    CarPositionDown:body039.CarPositionDown,
    ArchPositionOver:body039.ArchPositionOver,
    ArchPositionDown:body039.ArchPositionDown,
    FrontWheelOver:body039.FrontWheelOver,
    BackWheelOver:body039.BackWheelOver,
    RoofRefOver:body039.RoofRefOver,
    RoofRefDown:body039.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARqSURBVGhD7Zo7aBVBFIY3qdRYhVgJXpsgQkDBFAkYH50WgmBhGwRJcZsUEYmxNKbQIiApQkDSqYWVhdHCVyMWFoIQJI0IwUIQC6N2+t/7j8eTmdm5s6/sFn5cN2dn787j27Ozj2vf2sTT5D87QqNdn2mP3764697omFnPyPyeBRM1g+a6Hri5G8uJzaNYHrt1qltWiNrVN9Q1RG9d+7kwMIj45eShtaXXLA8z92PWROnUaLxxrpnOInp26yu9dzdmQHsfHh7e2NgwK0myuLiIZY46C9Jv/jYDatWiWV4EiDZRF+Q1m0Bb/JgN1dMU1xw2c61E0QAZrZNaoHGRbkqrpBFziFgGuPfAUiZoWpCt8QTmbu+ULbpztBVJza4tlZZooA9DJKv773oTWQhfHquTXqdry6MrGpTlWmZta1PAO5qenp7GjpObl0xRMepxzdyxROOxZebBL7qGLyzb7fab42MjJ553vxJLz7yO5+2VFwwibzrD1OCa+SucXP3A4NzjI1jCLEUDumYcaVwO0tLSEoL751fin4OY+5+/zXAV9/UMhILGK3f9/tVpBshZBl5oHLofnX2nB4lkN9F2wrUBVuj6yoRuHS2yztw3SJldW1kJJDFdsg6VY0vzKCPvKZqgY/lchxtitTlyPOQas+r1+c7E6vY4d7oB776yI7YitRmDSFkBO2ldFSKPnAukZ8rxVNe8fMF1vtQIEz5UPFGyWk4jt0oXtKVr42p8gvtdU7Rcl0i+TlsuShy5Rs9jVSSHoIeDsVB3ZIJ7XFM0X2YWNCW7V6RY4BxqVoKER8StulCXIE4bSIzuHq4D6FRyKZJclg6Q6VC5u7tYFVqmFgYGrf5bdVq7y/EIG/e7jhQdqNftLoixQDLJDdPzyKVNuHwFJqOQety+6U0B3dtco/Ybc51nOcu1VRfjnqeM1dedB11l6xJYxFzWdNLAQ1g0Y95HuX7+uaYawOc3IPWyCq4GjpuL7mjTiL9/iNFtFTIjLVEd12KZfFy/YKK/jI93nl/4kiHrb0jN1J31SURGobOYAaBZfuH3+mi3zPDk2R0TJUn/1KfLkCsfU+zD+oEjHnaldqQbRfrjJjWAZa9oi75Wq2XCJDl4+KFX99DQEEXnfrvIJ3sMsq4c16mXNalJeCZh/WIPJuXLrasjWC4fWOnHP0TYhk93k59S3lKi+SI5lRstuooOoE5ULnIBpEMxPyzB/NGZr+Xnor37lhlYfP8yhWXWmVqjk0KPvGrErG49/tqu4VXN221pJTwJm/sQ6pZX40D2B6W4xtLSTUqUrqsVdP38Qj7XQGeMoBvVcwgDKcH8sc018to7cr5uL+IaeDuaFa9NEFkzds8tGuiMSesJH1CI9eudcU3STpNSXAP33beXtGFoeKrFI9NjcdcWet7gxY8vOUDINRDd1k9HxUWDwP8jqA7rIlTQtXdGpuKe2K6Ba6QU0aBE1/rSYhE4LYqILo7HtaDVlKLbew7uJM11XSmVeq/XqZ8k+QNLTLgFZi4WFAAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039Ta = {
    name:"039Ta",
    family:body039.family,
    size:body039.size,
    CarPositionOver:body039.CarPositionOver,
    CarPositionDown:body039.CarPositionDown,
    ArchPositionOver:body039.ArchPositionOver,
    ArchPositionDown:body039.ArchPositionDown,
    FrontWheelOver:body039.FrontWheelOver,
    BackWheelOver:body039.BackWheelOver,
    RoofRefOver:body039.RoofRefOver,
    RoofRefDown:body039.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARZSURBVGhD7Zo9aBRBGIbvUqmxklgJns0hQkDBFAaMP50WVha2QZAU1yoSY2lMoUVALIIg6cTCysJo4V8jFhaCECSNCKkEK6N2+t69k88vM7NzM/t3W/iwrt/O3s7Ps9/O7t6lvTbzovWfWmi063O96buXdj2aOmG2U1jcs2SixtBc1+O3d2M9s3kM6+N3zgzKkul2uxsbG2Zj1Cegoa4heuvGr6XxfYjfzB5eu/+O5UNZ+DlvogGW6+XlZQaonEGdNM4101lEz299p/fBzmQs9ZLXbAXUKX3M/N8MqFWLZnkp6AmErWAR6TXQFNcYs+RvWaKtpPZC3VxMUWU0wjUtUzSePTBBi+gaFLDpGqSP2DXHRssAorG27oSyN4mYpLawpJvS8hila1oWlV7ROVg98BCL2cgFunRzsfwcH41rDkMsA762mI1tX/jM+5N5XmRckp6secOAbjzdo2NMguK063/ms7p+evUzgwvPjmI9eeqVZGWv1xPXKGcQRo7Vj9Xgw7XXDKzrhloJ7hNYoz8MXApec5W7/vT2LIOrj38z8ELj0P30/Ec9VJ3smnBtgBVmWYtEt44WWWfuB6Rk1+4FJYnpkjpUji3Lo4x8qGgSyNAw4YZYbY4cD7nGdIk5C4Hb49zpBrzHyoHYi9RmDCJlBexkdVWIPHMukJ6U45mueQuG63ypESZ8qnihpFrOIrdKF7Sla+NmfIL7XVO09QyQr9OWixJHrtHzWBXJIejhYCzUHZngHtcUzS8zC5qSwytSLHAONRtBwiPiXl2oSxBnDSRG9xDXAXQquRRJLksHSDpV7uEuVoWWKTwIWv236rQOl/MRNu53HSk6UK/bXRBjgSTJDTP0zGVNuHz0llFIPW7f9K6A7h2uUfuthf67nOXaqovx0EvG6mv9oKtsXQKLmNuaThp4CItmzOco188/11QD+P4GpF5Wwc3AeXPRHW0a8c8PMbqtQmakJarvWiyTL+sXTbTN9HT//YVvvak/2TVTd+qbiIxCZzEDQLP8wJ/1qUGZ4fnLeyZqtcbmvl6BXFlMsY9ut2uiRNiVkSPdKNIfN6kBLHtFW7Q7nY4JW61DR554dU9MTFD07OZllqTCN3sMclQ5rlMvNalJeCZh/WIPJuXDneuTWK8cfDCGf4iwD8tglx/ra7N8oPkiOZUbLbqKDqBOVC5yAaRDMReWYP7oz9fyE8be/SsMLH58m8O6yB9X6KTQI68aMatbj7+3a3hX83ZbWglPwuY5hLrlS14gx4NSXGNt6SYlStfVCrp+fiCfa6AzRtCN6jmEgZRg/tjhGnntHTn/7KiIa+DtaCpemyCyZhyeWzTQGZPVE76gEP3DEzCuSdZlUoprEPljUtYwNLzU4pHpsbhrCz1v8ObHLzlAyDUQ3daf0BUXDXL8tl0c6yZU0LV3RqbiodiugWukFNGgRNf61mIRuCyKiC6Ox7Wg1ZSi23sN1klzXVdKpd5H69RPq/UXXtWuKusKTdMAAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039Td = {
    name:"039Td",
    family:body039.family,
    size:body039.size,
    CarPositionOver:body039.CarPositionOver,
    CarPositionDown:body039.CarPositionDown,
    ArchPositionOver:body039.ArchPositionOver,
    ArchPositionDown:body039.ArchPositionDown,
    FrontWheelOver:body039.FrontWheelOver,
    BackWheelOver:body039.BackWheelOver,
    RoofRefOver:body039.RoofRefOver,
    RoofRefDown:body039.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARLSURBVGhD7Zo9aBRBGIY3qYyxklgJns0hQkBBCwPGn04LKwvbIEiKaxWJsTSm0E4sgiBpLawsjBb+NWJhIQhB0oiQSrAyaqfv3Tv5/DI7Ozcz+3Mr+LBuvp29nZ159tvZ2TvH1mafZ/9phHHzt5Wc6818fHPWbPz7tDevJ29PYD27eRTrtftvB2UpLP5YMFGWLe1eNtEoaGleQ/TWjZ83lyZOr34yRVWAarmY7WZpXV5TBEQvT+5FsLD1jd4HO6PRSQ0kr0V3cs0JtCuvqVWLZnkl6AGEZ8HSZI63xTX6LPlblWgrqZ1QNxdTVButcE3LFI25x+u5QyK6AQU8dQPSR+yafaNlANFYW7MO2RtFSFJbWNJNaXWM0jUti0qn6ARW9z/EYjaSQJMwBarc+GhcsxtiGUD03Uu7zMa2L3zm3ckTpqgcUTNrPjCgG7N7NIxJUJ6x5ud8VtNlBn3h6RGsp0+9lKzs9XriGuUM/MixGxsbDMj7a68YWPcNtRI8J7BGexjkKXnP1e5aXrKvPvrFwAmNQ/eT8x90V3Wya/y1AVZYZC0QfXackXUmT5CiXedvKEnMPLFdZd+KPErPh4omngz14z8Rq03IcZ9rDJcYsxDkW5ycbsB5rByIvUhtxiBQlsdOUVOFwCuXB9KjcrzQNR/BcJ2WGn78l4o3SqzlIpJV5sG5dG3cDE9wt2uKtuYAaY22XFTYc40ex+pIDkF3B32h7sAEd7imaH6ZWdKUHF6TYoFjqNnw4u8R9+pCXYK4qCMhuoe49qBTKU+Z5LJ0gKhLlT88j1WhZQoTQav9Vp3W4XI9/MbdrgNFe+rNNxeEWCBRcv0MvXJFAy6n3tILqSffNr3Lo3uHa9R+a7H/Lme5tupiPPSWsdraPGgqzy6BRchjTScNPPhFM+Y8Ku/nr2uqAXx/A1Ivq+Cm57rl0Q1tG+HzhxDdViEz0hLVdy2Wyef1iybaZmam//7Ct97Yn+zaqTv2TUR6obOYAaBZfuD3+vFBmeHZi3smyrLx+S9XIFcWU+yi2+2aKBI2ZeRIM8q0J5/UAJadoi3GOp2OCbPs4OHHTt1TU1MUPbd5mSWx8M0enRxVjuvUi01q4h9JWL/Yg0n5cOf6NNYrBx6M4x8i7MMy2OXG+tosDZy+TE4lo0XX0QDUicpFLoB0KObCEowf/fFafsLYs2+FgcX3r/NYl/nPFTopdM/rRszqs4c/2zV8qjmbLWfxD8JmHkLd8iUvkONBJa6xtnSTCqXragVdPz+Q5hrojBH0SfUYwkBKMH7scI28dvb82J0zWJdxDZwNjcVpEwTWjMOTRQOdMUUt4QsK0T88AeOaFN0mlbgGgT8mFXVDw1stHBkey7u20OMGH378kgP4XAPRTb9CedEg4bft8lgPoZKunSMyFQ/Fdg3yRioRDSp0rR8tFp7boozo8jhcC1pNJbqd92CTtNd1rdTqfbRO3WTZH/BhoSGAgN2dAAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039Tu = {
    name:"039Tu",
    family:"039Tu",
    size:body039.size,
    CarPositionOver:body039.CarPositionOver,
    CarPositionDown:body039.CarPositionDown,
    ArchPositionOver:body039.ArchPositionOver,
    ArchPositionDown:body039.ArchPositionDown,
    FrontWheelOver:body039.FrontWheelOver,
    BackWheelOver:body039.BackWheelOver,
    RoofRefOver:body039.RoofRefOver,
    RoofRefDown:body039.RoofRefDown,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATeSURBVGhDzZk7aBVBFIavVmqsJIIoGJsooqCihQHjAyy0EEQLmxQiSIo0KRSflfgCLQJyCxHEwkILbSyMFr4asbAQBJE0IliJVkYtBP3v/uPxeHZ27uwrux/LZHbu7uzMN2dnZzfzpkcfd9rN2xe7XO5/jt396XJBprsvXa5pWu16z8TI1UMLkInUmmbHrfdIT81+5W6ztNf1wMWFSEc/bURKZWV4fngN0mbVt9Q1RM+e/nFpYAny0CSuw5p4fBqKJg3qbp1rhrOIhhR6T37MzZnvp6amprrd7uFPR7CLSYnlYO6lz3d/2wG1atEsLwxEu1wCnpPyqGSwZ90KddCWuJZwRmpEl4lrnDs5OXlh0SW3r0DIj25aN7W7y12Eed0x3grX2iZvc4k+PQZ5iTl3es1t0Q1qnVgadm10GNFAD0MkCFiknD0izz02e3L18mX3x+5ytybjTc7X9BgQXZKxsTF678vVgctID9w+xF1M5dgwlVU7mzfjGpZNwMprC7m14iY2HPNq21ZXVDNffp3D5nYStPF47+Mfj8rmiv7SwByiF16ANyzY93AD0vXbn8IySyYmJsQ1ypkJIxMI1nnI3Nl/Y+jE+usrbyQ/epDAX7z0OlcmgE0yu0QKif7pw7uDLvcXc93aXcvXjPB7NhsN3Q/2vtH90cGu6fvWbnxVgjYLWDnGkrsa7+jmdm2iEpgWaPJ2Nfz1Q7xHfh5Bw6p1DXRnTSAH7h4Sco3p8uyF3joh3eLC4Qa858qJ+BWhzTyIlBUYhqymCpEjpzHhFbliyXQN0UjhuvLQAOGhYk/yWs6igMoscC1dG3YZFqVcU7RZAxRrtHFRYc81OtAKBwcq4fMZZLVTdwfH5NLtcU3R/JhZ0pScXpNiAZqK3QdsmJkTgEgnPAznZnWENYSN93EdIN0+TZmZx+gAuYYqfXoaXWFakyyljXHBtIdXRCGqCuj2u44UHagXzU3rjrFAcskNkzVyEitZvcgynm6bXIK6kfHW+Z9r1H7+TO9dzrhO1wUCognbWibAS4Km8urS5m+fx18ffyYlfbsA2IvAPK7lMJ81g/97R2elWHjgkYhzpApBLoNaYloZc0x9iF8Cy9jcTkJk83iYLEOztEiKjQMst4XQi2tTmn7XHBnpvb/MzMwg9X4LDoDKGwxtAOliWYI6bxyY6AYSeYDjym7+frclKXM8enLN5RDX4x+PQq5srtjH8PCwy+VEQszE2hyQvmIdbYBlr2jDvKGhIZftdFatvefVPTg4SNH8r10B+Gavx79ueC12B+1PynofmJAWm9xMaOu4BvpyACalm/xggjf4+XyLx2/Ykp/8cAIpCS9fR2RpUL9XNCeQOsDlJLQJLg3F3FiC+aP3bERr5NFB6WZLDi4e1ED81qpbLAPvDVoeeQZyV9CXzqLnWh53HBwzRFUhTRHdMe2LwVSlGy9BXR6Zebyzh8GEKcD84dbX/GSuv5drNl/ZiTTvCsRQyYIka2x0zThGgtpMIPip2GRNOGVLrCRlFr6gEPPfTvsugzRtpBLXIP3t20tWNzRmsdwXPhVBedcGPVnx4cePHCDkGohu+hXKiwaR/2mtFrFMSrr2Pgb6/peAWNcgbaQS0aBC14FFReC2KCO6PB7XglZTiW7vPTiXtNd1rdTqvVmnfjqdP609Al4CAQKnAAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039TuCd = {
    name:"039TuCd",
    family:body039Tu.family,
    size:body039Tu.size,
    CarPositionOver:body039Tu.CarPositionOver,
    CarPositionDown:body039Tu.CarPositionDown,
    ArchPositionOver:body039Tu.ArchPositionOver,
    ArchPositionDown:body039Tu.ArchPositionDown,
    FrontWheelOver:body039Tu.FrontWheelOver,
    BackWheelOver:body039Tu.BackWheelOver,
    RoofRefOver:body039Tu.RoofRefOver,
    RoofRefDown:body039Tu.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASTSURBVGhD7Zk9aBRBGIbvbDTGSmIVMDZBhICCFgaMP50WgmBhG4SQ4poUEYmxNKbQTq4IAUmphZWF0cLfQiwEBSFIGgkEC0EsjD9VfG/fyec4f7e7s3u3F3xY9mZnd2dnnv1udma3vjz2pPafjrBD/VaSs43RDy/PqI3ep7px3X+zD+ux9SNYLzdfJ3m9TUXjGqI3rv28Ptd3aumjyup9Kucalil6vn8vNmc2vr4afMddvU61XNOyLpr524OquJZwRnpbigaVcC3hjDTGHi/GD4po7GJiG9DlcQhV0jKAaKz1UYcEe3qWBu9i3Wg0fCfO/phhYnh4eHV1FYnfm5s763XmYI3Mud3zrSMKpZuuDY+2aBDjempqijmAEgHlAhEdBoeNr19WG3F0pw+BQVv07Uu71EbiCwuOeXPiuMqKA1qJ2takB3h75fm9C4sMgpRMrk3IorK26EJcG1WXEfT5R4exHjn5jIEJEJviGvlMhJGgbjabSMDU0Vunkz3tYex//jbNTTw2mBBQVSNTH/5/WrmoUlss7F9UqYTSXcske/r+LyacsNLQ/fDce709erDrhEsDLND2FYNuFrDwoasj3NQxLJPMru0/lFEDnaxNpVmfR/HeVjRBxYp1DfTGGoHs9KsTco3uErNkJOwa5w434DxXTsRehDbTIKWswG3wVVVIeed0jPBKORXwuoZorOG68NAA4VvFlmS17COHSh+4ll4aNhkWUa4p2hgD5Ku04aLAluvogZY7OFAIn8/AV0+9OTgmk26Ha4rmy8xIU3J6SYoFaMr3P2DFjD4BiHTCw3CuryEsIWy8jesAdv10YnoeQwfIdKvs0230Am1NfCEDDOOCUR9eEZkoKqDb7Tql6EC5qK6tO40FkkluGN+dk1jxtcJn3K6bXIK6kXCW+Y9rlH5jtjWXM1zbZYGAaMK6xgR4JKgqry51/v5lElNByWnbBMBWBPpxXQ7Tvh787xydhWLggUcizpEiBLkMSklTyzTHlIf4JbCMRW0kpKweD5NhqE+LrLHwBsvfQmjFtZFrzzVHR1vzF75AyPoCDIV3MbQBpItlCeqscWBEN5DIA7yvbObmyrEkT/H46R2VQlxPrk1Ariwq24W8KsuKhJgRax3AvmIZdYBlp2iD+tDQkErWagcOPXDqHhgYoOjcbxc5s9fvf9nwWmwO6p/k1fbsW8A6X+dmhLYe10C/HIBJaSZfmGAGv4OzeOzDkuxyk+YNZFt4+TIiSwflO0WzAykDXE5Cm+DSUMyFOeg/Ws9G1EYeHZRuLMnB+YMaiN9SdYtl4PyDxiPPQG4K+qV9tFzL4443x7hFRSFVEd1p6pcGoyi98hLU8UjP4+w9DIwwBeg/1Pian+DQnTkt83V75Ce4QgYkvnujl4xjJKiNDgS78nXWhF22xEqSZ8IJCjG+3plzGaxtI4W4Bik/JvmaoWMMltvCpyKId22gd1Z8+PElBwi5BqLb+HRUyHdl+YDdScQyiXTtfAy0/UpATNfANlKIaFCg68CgIvC3iBEdj8O1oKspRLfzP9hJquu6VEr13l2nbmq1P9TbvfE0ifzAAAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039TuCu = {
    name:"039TuCu",
    family:body039Tu.family,
    size:body039Tu.size,
    CarPositionOver:body039Tu.CarPositionOver,
    CarPositionDown:body039Tu.CarPositionDown,
    ArchPositionOver:body039Tu.ArchPositionOver,
    ArchPositionDown:body039Tu.ArchPositionDown,
    FrontWheelOver:body039Tu.FrontWheelOver,
    BackWheelOver:body039Tu.BackWheelOver,
    RoofRefOver:body039Tu.RoofRefOver,
    RoofRefDown:body039Tu.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS0SURBVGhD7Zo7aBVBFIY3qdRYSawEYxNECCiYIgHjo9NCECxsgxBSpEkRkRhLYwotAnKLEBA7tbCyMFr4asTCQhCCpJFAsBDEwqid/nf/8Tg5Ozt3dmf33i38WDazs7vz+Obc2Vf61iaeJf/pCo12fXZm/PalXfdHx8x2QRb3LJlUM2iu64Gbu7Ge2DqG9fFbp9O8KHquvqGuIXr72s+lgX1Iv5o8vNZ6w3w/Cz/mTSqfHhpvnGuGs4ie3/5K7+nOAtjeh4eHNzY2zEaSLC8vY12izEj6zd9mQK22aObHANEmlYK4ZhWoi4vZUT9Ncc1uM9YqFA0Q0XZQCzQu0k1unTRiDhHLAPceWMsETQuyNxzP3O2cskV3iboC6bFrpVKJBvYwBHLvwF1nIAv+y2N90nvpWnnMigZVuZZZW+3yeEfVs7OzOHFy67LJiqM3rhk7SjQeW+Ye/qJr+MJ6Zmbm7YmxkZMv0kNC6RjX4by78pKJwJtOML05ZVJJsnJw1aRSeuCa8SucuveRifNPjmINsxQN6JrpQOMySK1WC4kHF1bDn4MY+5+/zXET9/VMCGiqypTGg0/rF03qL912/eH1GSYQs0w4YaOh+/G593Z/EOwmtRN/aYAFZn3FYJsFLHzo6gg3bZRlUti1ikqgWmBTtKs0m+dRvHcUTdCwal0Du7MqkJ1+bXyuMateX2xPrNkWlw434DxXTsRehDbTIFCWZxjymioEjpyNCq/AR4Fc17x8wXXloQH8Q8WeFLWcRwmVeaAuuzRsMiyiXFO0XJdIuUYrFxX23MYOtNLBgUJ4fQZ57bS7g2MK6Xa4pmi+zIw0JafXpFiApnK/AzZMzQlApBMehnPzOsIS/MY7uPaQbZ9NzMyjdIBCQ5U9PYtdYFYTX8gAZVxQ7WGNyERRHt1u14GiPeWiuVndIRZIIbl+8kZOYiWvF3nGs22TKqgbCWeZO1yj9BsL7Wc55TpbFvCIJmxrTIBHgqaydmnz9y/TfBT0GFGwF5553JbDdN4M/u+dKgvFjQcuiThHihCkGpQS0sqQY+pD/BJYxmI2UgKbx8PkNjRPi6yxcIDlZyG041rlZp81x8fbzy98yVD0GxIK72FoA0gXyxLUReNARTeQyAMcV3bz9/pommd4+vyOSSGupzenIFcWk+1CfeAIR0JMxVoXyNZYRxtg2Sla0Tc0NGSSSXLoyCOn7sHBQYou/XaRT/b2+NcN62J30P40L9m7fwXrcpObCm07roFdHYBJ6SZfmOAJvp9P8diHJd3lppK3lKy+jsiyQflO0fKCtHJQnYQ2QdVQzIU5mD/a10a0Ri4dlK6W9ODyQQ3Eb626xTJw/kDjkWsgNwW76jzaruVyx8FRQ1QV0hTRHdK+EFRRduMlqOORmcc5eyhUmALMH+b+ml9CMZ05LfN1e9E7EEUlNyR5Y2OXjGMkqNUEgl3lJmvCKVtiJc3T8AGFqK93+lkG66yRSlyD7LtvJ3ndsFE3yx3hVRHEu1bYkxUvfnzJAXyugehWn47iRYOQ/wGrHLFMIl07LwMdvxIQ7RpkjVQiGlTo2nNT4flZxIiOx+FasNVUotv5G+wmzXVdK7V6761TN0nyBzpI4CpoFK3qAAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039TuTa = {
    name:"039TuTa",
    family:body039Tu.family,
    size:body039Tu.size,
    CarPositionOver:body039Tu.CarPositionOver,
    CarPositionDown:body039Tu.CarPositionDown,
    ArchPositionOver:body039Tu.ArchPositionOver,
    ArchPositionDown:body039Tu.ArchPositionDown,
    FrontWheelOver:body039Tu.FrontWheelOver,
    BackWheelOver:body039Tu.BackWheelOver,
    RoofRefOver:body039Tu.RoofRefOver,
    RoofRefDown:body039Tu.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAShSURBVGhD7Zo7aBRBGMcvqXxVEivBszlECCiYwoDx0WlhZWEbhJAirSIxlsYUWgTEIgiSTiysLIwWvhqxsBCEIGkkkEqwMmqn/9v/5HP85nE7+7ot/LFsZmf35vHbb2dn7jKyNvWi859GaLXr83OTdy/vejRx0hynsLhnyaRaQ3td7729G/uprePYn7hzNstLptfrbWxsmINh34CWuobo7Rs/l/buR/rN9JG1+++YP5CFH/MmlaFcLy8vM4HCmWiS1rlmOIvo+e1v9J6dTEapl7hmLaBJ6aPmbzugVls08yvBHkBYCzaR3gBtcY0+S/xWJVoFtRfq5mayaqMVrmmZojH3wAAtohtQwKobkD5k1+wbLQOIxl69CeVsEnmCWqGkm9zqGKZrWhaVXtEFWD34EJs5KASadHOx+hgfjmt2QywDLlvMwY4vXPP+VJGFjEvSzJovDOjG7B4NYxDkZHZzRjaTtcNI83M+1fQzq5+ZuPjsGPbjp19JVM7NzYlr5DMRRz5rT6vBh2uvmVDPDbUSvCewR3uYcHFPSePBl/VLJrXDyqEHJpVRu+tPb88xcfXxLya8sNHQ/fTCR7s/drDbxEsDLDBkrRi2WcDCu9fHeWijLJNk1+4DpVpgk9pVmg15FO8DRRM0rFrXwO6sCmSvX5uYawyXGLOQcFtcONyA97PyQZxFaDMNcsqK3IZQU4Wcd85GhVfOpUDQNV/BcF15aID4rWJPUi2HKKAyBOqyS8Mhw6KUa4pWc4BijVYuKuy5jR1ohYMDhfD9DELttLuDa5J0e1xTNL/MLGlKPl6TYgGaij0HbJgaE4BIJ7wMnw11hCXEjQ9wHcFtn02ZkUfpAEm3yv24i12gq0kmgsq4oNrDGpGJoiK6/a5zio6Ui+a6uvNYIEly44TunMRKqBch427bpArqRsJb5j+uUfqthf5aTrl2ywIR0YRtLRPgJUFTWbu0+fvXWS5qIkYU7EVkHLflMB0awf+u0VkoJh54JeIzUoQg1aCUPK3Mc019iF8Cy9jMQUbO5vEymYaGtMgeG2+wPBZCP65VrrvWnJzsr1+46k39yQ6FDzG0AaSLZQnq1DhQ0Q0k8gDvK7v5e30iyzM8f3nPpBDXs5szkCubyfbR6/VMKhEJMRVrDeDWWEcbYNkrWjHS7XZNstM5fPSJV/fY2BhFT29dYU4qXNnb979uWBe7g/ZneZ19B1awLza4qdC24xrY1QGYlG7yCxOs4Ee5isc5bNkpP+prs2Kw+joiywble0XLV32Vg+oktAmqhmJuzMH40X83ojXy6qB0tWUXFw9qIH5r1S2WgfcBLY+8A3ko2FWH6LuW1x1vjrpFVSFNEd152pcHVZTdeAnq8sjI4x09FCpMAcYPM7/mr3MYzryW+W9HqTMQRSUTktC9sUvGNRLUagDBqWKDNeGQLbGS5Wm4QCH2D09Ar2Wwd41U4hrk/DEp1A0bNVkeCN+KoLxrhT1Y8eXHLzlAzDUQ3epf6MqLBgV+2y6PWCYlXXtfAwN/JSDaNXCNVCIaVOg6MqmIPBZlRJfH41qw1VSi2/sMNkl7XddKrd6H69RPp/MHRKvaBwM3hpkAAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body039TuTd = {
    name:"039TuTd",
    family:body039Tu.family,
    size:body039Tu.size,
    CarPositionOver:body039Tu.CarPositionOver,
    CarPositionDown:body039Tu.CarPositionDown,
    ArchPositionOver:body039Tu.ArchPositionOver,
    ArchPositionDown:body039Tu.ArchPositionDown,
    FrontWheelOver:body039Tu.FrontWheelOver,
    BackWheelOver:body039Tu.BackWheelOver,
    RoofRefOver:body039Tu.RoofRefOver,
    RoofRefDown:body039Tu.RoofRefDown,
    RackOptions:[],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAiCAIAAAD00eEqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASSSURBVGhD7Zk7aBVBFIY3qYxaSawEYxNECChoYcD46LSwsrANQkhxW0ViLI0ptBOLIEhaCysLo4WvRiwsBCFIGgmkEqyM2ul/958cxzOPuzv7uCv4sWxmZ3fn8e3Z2ZnckbWZ59l/WmHU/O0k53vTH9+cMwf/Pt2N6z23x7Cf2TqG/dr9t3leCovfF0wqy5Z2L5vUMOhoXEP09o0fN5fGzqx+Mll1gGK5meN26VxcUwREL+/Zh8TC9ld6z0+Wxg5qIHEtupNLTqBbcU2ttmjm14I9gLAWbG3GeFdco88Sv3WJVkHthbq5mazG6IRrWqZozD1ezx4W0S0oYNUtSB+ya/aNlgFEY69mHXK2FEWCWqGkm9z6GKZrWhaVXtEJrB54iM0cJIEmYQpUu/HhuGY3xDKA6LuXd5mDHV+45t2pkyarGqVm1vxgQDdm92gYg6Ag85tzspmsHUban/OppssM+uLTo9hPnX4pUdnr9cQ18pmII/dubGwwQd5fe8WEem+oleA7gT3aw4SLe8qe/n9ev2RSO6wcfGBSOY27lkX21Uc/mfDCRkP3kwsf7P7YwW4TLw2wwJC1NGyzgIVPXJ/ioY2yTEq7dl8o1QKbsl2l2ZBH8T5QNEHD6nUN7M6qQPb6tYm5xnCJMQsJt8XJ4Qa898qNOIvQZhoUlBV5DKGmCgWfnI0Kr4JLgaBrfoLhuvbQAPFHxZ6UtRwiQWUI1GWXhkOGRSXXFK3mAGmNVi5q7LmNHWjJwYFC+H0GoXba3cE1pXR7XFM0/5lZ0ZTc3pBiAZrS3gM2TI0JQKQTXoZ7Qx1hCXHjA1xHcNtnU2XkUTpAqUfl3u5iF+hqkomgMi6o9rBGZKKoiG6/64KiI+Wiua7uIhZIKblxQk9OYiXUi5Bxt21SBXUj4S3zL9co/dZify2nXLtlgYhowrZWCfCKoKmsXdr87cs8FzURIwr2IjKO23KYDo3gf9boLBQTD3wScY8UIUg1KKVIK4tc0xzil8AyNnOQU7B5vEymoSEtssfGByyvhdCPa5XrrjWnp/vrF656y/5kh8KHGNoA0sWyBHXZOFDRDSTyAJ8ru/lr/USeZ3j24p5JIa7nN+cgVzaT7WNyctKkSiIhpmKtBdwam2gDLHtFK0YmJiZMMssOHXns1T0+Pk7Rs1tXmFMWruzt5980rIvdQfvzvGzv/hXs0wY3Fdp2XAO7OgCT0k3+wwQr+FGu4nEOW37Kj/q3WRqsvonIskH5XtHyr77aQXUS2gRVQzE35mD86H8b0Rr5dFC62vKL04MaiN9GdYtl4H1BqyPfQB4KdtUh+q7lc8eHox5RXUhTRHeR9hVBFWU3XoK6OjLyeEcPhQpTgPHDzK/56xyGM6/l43fOYl92BqKoZUISejZ2ybhGgloNIDiVNlgTDtkSK3mehgsUYv/wBPRaBnvXSC2uQcEfk0LdsFGT5YHwqwiqu1bYgxU/fvwnB4i5BqKbfoXqokHCb9vVEcukomvvZ2DgrwREuwaukVpEgxpdRyYVkdeiiujqeFwLtppadHvfwTbprutGadT7cJ36ybLf1jfM/hiyNN4AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAQCAIAAAAUF48YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC1SURBVFhH7ZfRCoAgDEVn/9Vr9MnRaz+WtkFmauYkl3gIiojhPU4rtYwrtM68TXQFkJI3KMUu5PAjj6EU8Qh+KREjiHwvjxE0oRSulJRaiGQvzBQDnQ/Sa2lePfwl/BQXKR3kXD7ZMy9qHeWlcCL0TvFAUsRuEFXonWJweqKAFDldVmokZTqlsdVnpPQNBdEe8FB0g031F3ORqcUU5jsFy2WksschSgpzMMG/5HTuU1RdEAuAHdWbSK66D4G/AAAAAElFTkSuQmCC'
};

const body005 = {
    name:"005",
    family:"005",
    size:128,
    CarPositionOver:22,
    CarPositionDown:46,
    ArchPositionOver:26,
    ArchPositionDown:70,
    FrontWheelOver:34,
    BackWheelOver:89,
    RoofRefOver:57,
    RoofRefDown:42,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAhCAIAAADI5hvkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOWSURBVGhD3ZkxaBRBFIbvUnkmhQgWkkI7FQKmVPQUbdTCysKUwVbsAiEmYOMZhbRX2GhKLawsDDaih4idQkDstAh2YhO19N/7h3fvZmZnZ/bmtvDjuLybm5mdb97M7t6mvdN93WqE3XeXTKRYef7XRK3W1s0DJlLoCoB1Fi684ccJmbq862z5CBAr+8oi1xRMV372Qefj+TOMRezi9lcGFm+XT+CdYi+vfR6WeWA1MPkUTFFezEV7MP+JwUavw4CIj1A2QcTyB/WmYFryMO/uLcpKhvb+3T/8ymJz9jDe6QNnEUO8tv+TsQWaWPOFA9XwnzF/s0JzjJ7mO/0PLPcCQ7ysVKNJmTlw6+NA3hNqmPzyYo7kwCFsXpss/pnlLXNTGkEgz2V4/a/ePms+RJBTvswc5SYKgn1r7eRKtL8E8f7Z5L3m67/XGJSd7TTIm5y9Y0Dn7J/aOG6qfx55MZePMrIk4M9OKnevt/NU/wzy2txat72DmyZKJ+bsNXfksYl8VPZQ5zrv7ZRJg/yx1QWWfH+0y4CEz3+SKHbC4Pqr0yy0wLHw7p1uwL0jmyhw/U+WD0wnjifmQMu7m5kCLiIv6LZlrYBuiCasGfavlndtvSNgHr59ucGPgPIydLeVNSMBMZektqjs9a+Qp3nMsGQRIvnHT71gjKMmKWVHBuD198tLtlOHzikA3K6RzfmDp9/v4/3Hr5VhWYG7n+shO8I673jkA9kWN5faA2VyrJ5zaRORB9p/TJ63YtbvUAyOQRjWj6xMKg/hTUAS7JmTS3+uMt50jcl7z+STj2ASkmbTAiMXebxr/zH5yFN6Y+iFOjl6CoDIF3d4XO34Tr+KWv8jMH/fXWJcZJ73p/yssZZckzOSmnkZauUgHy6dZLDYfTpa9lYzdOd9iohrWAOzEC+PmiYaEnOJpb9fHt2hC5i7Dxj4vM17gLy7NBIc1DvIcIZEvtjzVy7fGRYWcCJxM+R9tIJCvLgirE3RPF5zwBEGhrd6b+7c4BmC9mAwwJ+NXgd5o7m3Rwv9yFXImPzKrsrMBeYfgbUEeJ0no9/zNI8EB25+kQuV5oD5D5jjajfDK979dfOYKSbtZcjamZBw2mPMCarp8SCWf5aMrvPin2SexdMll7kGrWS0kKUvMMteF8Xj+udKvosWSIKtjh7a4mt7/gnLQVvf26finvb0+AIJLCNGLzXz2nZ575aJhmSQb5Iaa76UVusfNNmDNC5cKp4AAAAASUVORK5CYII=',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAJCAIAAADvgKZUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACFSURBVEhLY9xhu4sBCaQ/SoWyYGCm3Gwoa9AAgo5E+ApTKTIYPH7D5U5kFzJBKPxeAgKCCugD8DgDWQrqK2LAgHuM+KAH+WrAnUsMINKREGVMw8lLcMAoLy8PpPAUBsgmDlSZQZKvgI5EL9mxggH3GNwB+G2HKyPKV0BApLm0ACRbzcAAAF7oPE/A6wrPAAAAAElFTkSuQmCC'
};

const body653 = {
    name:"653",
    family:"653",
    size:128,
    CarPositionOver:8,
    CarPositionDown:48,
    ArchPositionOver:19,
    ArchPositionDown:67,
    FrontWheelOver:31,
    BackWheelOver:92,
    RoofRefOver:60,
    RoofRefDown:44,
    RackOptions:[rackShort],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAfCAIAAABmhQT2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPISURBVGhD1Zk/axRBGMZzgYB6gmhh4wdQQTBdFHKKgsQUYpmUFnZip6DR0j8Bba21NLWFpwjBuwMVxD9goR/A1sojNqJP7hlfXmdmZ2d3Z/c2P4ZlZtmdfec378xuLp1+7+VM+zh/5aSpKR6u7DK1OI6d2jS1pmijze693e8WT1zb+GXaxbG8N6a1pTZxdIX2D37ozs2ahkPv+7ypKRrW2jqbUDle22KFgoaHPuHIkwGwOfBK4pUb2VVp2mVTVAKxEzl42u8/emPaE2RKCDpEbziJeh1OMxdO81gqcaw+YPQAvzpnAU6i4HHUmpC22NQqiaWgCuIUeSoG63DaCpuWyi+DM0U/hkj4LjyCQpH4NTmdvk1XJY4Lo7f6ZCooNOwUATCGEnSm+BbiYLS1pcE5HEejkZy0XAfAlfioivwGwsXydtJbyu27xu/rS4eR6UW/qKaZmxgPNzIWqqxC5Af/nvV9pjYBMWAaWC48P86Tp598Q29Fk7SJ3PTGhFi5zVEBor9zy+QghqfzBeSmp841YN3uoi/OAiEhQ1GJT9LENrMm080ahPhs+bNpTGDoXsJ2YtSUA0Jx5KpHJddpSZv3uwdMrQgBXwIHkIvuikMl1gwVxRthfJLm2Jx7sP/jwvbMM0rZVjTe3SpXiky4F2+f1YmcKsGVG07SkE28FvB6xd5s2v9IMlSGldZaYHossp4b0G2Ztf6EJZk2qbKOLQkRM8dTqYRELh3vOiW5or3BeOXKU1yhIZudjZ+mkRTaTKVSv6CKzn1AsRueNkuhsTZjEjNrUQQShNS3xiv26ZVr9Smj9gr127Q+3yzQ483xD9PwgTd+eNGlVQlERMKetVyvU4wx3yZ/WPTazPWo8TpFDwmXuYaDxwaaNZGSVmECeWCxvnoEx/neYzaBbRMqRTzPCIVUElcoOokPtxABmxxRZPDhhWVNyXL/4o2nXyVDbZtY4/jLP4lKwt99hfpsAgh1bZaLXDu1DALvEOD0v189ls5eXXx1GX8vu/eXJmFXJSinEuAuRs4j9LFADgp2QpY/K3tZUEcibttE+rB0jr6//nv1xeaAvbCwXi6mHY13yHid6IKPSBbUx2tbneFwaC6cgLM4cg/Cu4I2QRWb1qrxLpNU6P6rJ4FELh4AzugmkKfMwig2Sha0mcDwKCqTDN56/I4DElhQD4zFfgthNkxNecT9FXOTFYlGeq4DPdqKuQm0EBLo0/O96d4Pktj0ktCsmzXVbRbCYxNY468YE3uTn9brRv6307BK4LcJtNDqYYXTsyaatjkz8xc3tYYajxI5OwAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAOCAIAAAAkIEyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC4SURBVEhL5ZfbDYAgDADRQWQSxzHOZFzEOI6TiClRLKAUUR5eTOwH1nKUEKqpnZlGv3QyMjE0o4wKAou4VqBSmI6TCHcLQFIuHIu31XyIoFoAUnDhUbledi3f2eK3fvpXUoRfuqxBU37aEXENBvx79lsjFL8WoTbU3ztCuIBnOz7RTrs9EanjX0Itg1SDsX7cES4Z0RiU93uoK7GPF8EeV5xziASkjNHnD1At2DBfutJEVx/KAmNsBcAOSkUnmRCTAAAAAElFTkSuQmCC'
};

const bodybrix = {
    name:"brix",
    family:"brix",
    size:128,
    CarPositionOver:9,
    CarPositionDown:40,
    ArchPositionOver:15,
    ArchPositionDown:70,
    FrontWheelOver:35,
    BackWheelOver:97,
    RoofRefOver:34,
    RoofRefDown:37,
    RackOptions:[rackShort, rackMed, rackLong],
    RoofOptions:[roofBrixDRoofLow, roofBrixDRoofHigh],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAnCAIAAACKWVELAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP3SURBVGhD7Zo/aBRBFMb3YqEkqYJp7EUEweIstFCjjVoIgoXa2YiF2GkRrOMV2qYINlqI2gkWBhv/NFGIhSCI2NgLKcRIOv28793kZWZubnYys5dL/HFs3uzNvnnz7Zs/t5vW4vFXVYOcvXGMxv1Lew6deE07QK36tSp/fndKrKqKiSRMuo46DsOtZ2tiRYDelqsfWRnVxPIRr2+KjlCwVv9HGi10QNbaOnYmpsTakcyuroi1kXo6mgmoLryrOotPPvz69uoBGO17MzxDPt5+I5bzVRh9IQlfzvreOq4rAzrizcoaOlLEcHBz4x2xqurO71mxuiA4PWdRR3jTl2wGNGfdg2TPriuxer1wpYzVESKi579+XGcxIUQEd2X5vdYR3nKJSNDE5PRCltujpbz8/BoN8PTCAxwX55dYNIzJ3yAUkXbenm9ZdDeh3bcezE13rzJYRzMnZk+fLY41nPf3QNHdrgzQkSKWGIMjAaZCrpBAErKXkhaD89GM6CzQG45crPOiF4fNg7x5cuSoFKpKsrELimaYkpCO7ojG7IvPzklM3VN3ltRS9tWxxIg200qJZCxEICU1fh2NiCwWAsMQ2S2FTaNd5fIMJ9irSUFNkYBnzMLt2T9qEZGM3XMb+LNr7O7uORi1YuXk5c6M3mnbwKvCdYjenJKYqwxaL4JMdH1amD25raMWkR02CxYwSe62atGveeqo1dT+LcJ9INbluMS9VUWhlBt0NBNnuVBcHbMzFB3982OTcYw6HDTr+aiTkUaAZKG3Xz4CpKStI0WMjCNGcZeh6JgWagxoa11Hk4wge5Nm0f/ZWtu39xFtovcDk9MLYo0a518eFh07E1PmHkJHfEE7Oy/OfUpwXmvhTmvCS0y7ZF1HHCll84MuLw00YYEWZb1uuOHtR+g5RTlwA8UafdCX2dUV0VGPhf+5mYA/Hwvly3ZKQwvPOgN0ekYyUCPtMMF/PEWdu6A5jGvR8czpmzjOfHjMCGJCoXAx1dw6Rbsa6dzsk7zE73jA4vySrSOOCGJgKFpE2i4BD0PXESJimymFPmATGqmmrSNoHVzGMUZHVHBf43rRP5bIcHVEhX7/XmKhf54EgA6yziAT+WExDOLAMVJEEF8zC7lEBKgZHv4GyUc+2eYvXOSz+9NKZ3itUIj14hz+2Vsryshx1K9vuJzJGKhQ96Za/xfGsJlJBGfgs9Vut+VEF/2wwHtj6aKujsAaI+ywFPIRcJsWeb+hDW/mIcvceMfWEQx87pIgItgKOmaJHPCW6IdVjeooVgQxErMztcgYufUG8N/8aL3249vqQLcb0LEQZXUUszzDlTJNxEiG87ynMb5/uYgPjKIiVlX1F1YFoL+x2Bo5AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAALCAIAAADk/qT1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACuSURBVEhLY9xhu4uBOJD+KBXKwgtmys2GsgYNoIrLmaA0IUCkZUBAvEr6AGq5nKiQGmyeJx5Q0eXEpimSwNANWTyAcEiNqASFRwtN0tSwBEzAUByWmYXqANRKICakiKz7kY0a2OYCGS7BHw6g3Ac0CL9ZxPt5wEMH4lvyIgyPSqAUgZYn0EoyPI8ncigJSjzGYoK//xmYGcmxDtMWiCEktNFJAuQFMRUBlR3AwAAAFedN7djBmFkAAAAASUVORK5CYII=',
    SecondaryPositionOver: 15,
    SecondaryPositionDown: 40,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAVCAIAAADUyWdkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHYSURBVFhH5ZehTgQxEIb3TpHgeAkMCRoBF9wZNBaPxfAEGCweyxNwwRAwGCSGl8CRIJnLPxnmOt3Zdq/lsrefublu2+n8O512J4vjp6Ya88sjGLfnOwcnz7Adsvpndf54PWWraVJW4pOqmvYqXD38sJUAxVavf2Jn6sZWjHQ1u1UjvbKiHTRaVkfEDtVudvfYGiXX319sreKpJoUjF7wxnaGz+8+Xi30yFndvaAHaRfDIx67NH47+0T5OmBRINOM6VMuKRENjda2Bar1ni6KjXXPmtqkQhRVuyr8G2pvrLMWOLSsZQRPSy4CBlt44M0Rrely1MZczm3f2/tCaa22FcFvR6aaFI2y6RVSjRBubZIBKGM4xTXTzhqqV3ZuoO3KAliXIiPVxLmiBr0iujTPRAmx10y0rqpXdm1IOaiRaJRI/qv5Uq31uFt9QQsGZo5/bgjzlWy4kK5hoiMRWNOdmRGCU3wfYr+OUUYJVh7LMzhkgN96lapAM4elDRNLVfwNEmzOoprWzh5TgrxgEw2lIpaOmDQjHqlVybFUrzkZUm9Km+E+vQwcbYjKbv+O/Q29Zty/XCEq3pWqJXml9bOWwEdX6LTUF8sWqcUMh9EEc3GacRwPi7PHwF4J3CETOmkh5AAAAAElFTkSuQmCC'
};

const bodybrixP = {
    name:"brixP",
    family:"brix",
    size:bodybrix.size,
    CarPositionOver:bodybrix.CarPositionOver,
    CarPositionDown:bodybrix.CarPositionDown,
    ArchPositionOver:bodybrix.ArchPositionOver,
    ArchPositionDown:bodybrix.ArchPositionDown,
    FrontWheelOver:bodybrix.FrontWheelOver,
    BackWheelOver:bodybrix.BackWheelOver,
    RoofRefOver:bodybrix.RoofRefOver,
    RoofRefDown:bodybrix.RoofRefDown,
    RackOptions:bodybrix.RackOptions,
    RoofOptions:bodybrix.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAnCAIAAACKWVELAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOvSURBVGhD7Zo/aBRBFIf3YqEYq6CNvYggWJyFFmq0UQtBsFA7G7EQOy2CdbxC2xRio4WonWBhsPFPE4VYCIKIjb2QQoyk05/3e5m8zM7OvR129twkH8fm7WZuduabN7tze9ebP/aqaJEz148yuHdxx8HjrxlHqFW+VuHP705KVBSWlsRJ96jb4bj5bEUiA+htvvLGwigmUQi73xSPMFir/51Gi45ore1xMDkl0aZkZnlJovXU8+guQHXhqOosPvHw69sr+2WnO6Ajways4ZES+3enuRtkdudAoqK4/XtGoiEfb73R16wOedRdZi/KKq0eIRE9//XjGne1LyPQennxvd2jvjARy0U5x/Bcen5VoqJ4ev4BtvNzC9x1mDxSIgJ4hEEYacFjGsFqy0MSJDJOI1NytEdOZ7SPEhF3zmMjuKwMpuSE/K2gLHHT8m2V4B1ihEcAiRI1AWvLlzX52KfALjPMEfPoiuoZnTapNwCYzpKQqympVVZ6zDGj3cWxc8lIJBuHyKFVwh6dRO5uQSQbh/CIe8gQuF9riUjG4bF1/Nk2cWf7LALMcR6xgOUCtvmujHqRn0Da2sgtgHyPWiI7rE/w5PARBljBMKiiqkv0qG1GOmDx4r0db8k3VEGocp1Hd+HM15Syx8YZi8fw9bHNdnQdTpq1fNTJyCBCsuiNl48AKel7pERjOyzGy4zFY1pTLeBcax5dMoLGT+lu+j97K3t3P2JM9Hpg1577EnWNcy8PicfB5JQbQ3jEPxg3zouznxIqr3XjTjtFEMt5yZpHbKmy/UnXLC2cwgNnlPt1yyfeeMSeU+QDAyhR90FfZpaXxKOeC1u5mUA4HzPly0ZKQ4/AfQbo9DQy0pGuMKF+O1krL4PTYV6Lx9OnbmA7/eExW2BpCsVZipXLZO2qsXK3TgpiX/GA+bkF3yO2aMTIpmiJjMtEahi7R0jEMlN2KsAi1GjT9wh6BxaxtXhEgfLXuEH0hyUyXo8oUPXzEg/98SQCPMh9BpnIF3fjoB3YGiUCe8lGaEoiQMn49HdIPvLJNj/hIp/LH610htdqCvF+5If62VuvlcZ5VNU3vJ3JGClQd1C934Wx2cwkgiOos9fv9+XAEP2wIDiwrKKuR+DNEXZYdpojUm1ay6umNmpzD1lmdw58j2Dkc5cEieB/8NhIywGHRD+satWjRAYsitmZWjTYcu8bwH/XR+9rP35bHel2Cx4zkdejhPkZr8o0iUbG87ynNb5/uYAXgqwSi6L4C3tdgcNo3PPiAAAAAElFTkSuQmCC',
    imageArches:bodybrix.imageArches,
    SecondaryPositionOver: bodybrix.SecondaryPositionOver,
    SecondaryPositionDown: bodybrix.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAVCAIAAADUyWdkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGvSURBVFhH7ZixTgMxDECvnZDY+AkWJGYGqNi6MLOys7LwBSys7Kx8ARULgoWFkYWfYENixJUt4+Z8jnMkd8rBU6X62twleXWcwGx1+NAUY3l+gMH16dbe0SPGBkntkxq/PR9T1DSekdh4rclemYu7L4ocwNzKtXc2hmYUafhtxq2Br6TZVo3UakiMWLva3qHoT3L5+UHRJpY1Lhyp4C8mM3Rx+/50tksX9QATUTMuYm1180IXicC9stZUZE1OGWfRFjen9xawNnsrA1LvhcEFL/rCBH4Mioqh1nQ917Ccda1qJ3IbKZRr6mOdxo0tLppundZ+qQwYy1oWWBwW92DpKCs0i7LJoJaa0FreowbWnXIZMRiYcYySa/+JBkhNmG7ykw1redcmF7XaE63Nj7W8a3OS8B/jtIeisoyJhvlcrqLBacA4OkQxTifGY/kIsraGynB68nF8SFH/4SHp6gmtSXf9hssEt8MtA281KI6sFeq4bS07o1ibw1IastfawQUxWyxf8dqgt9bp5RoA6ba25uwVxkdRCqNY6zdUD9AXWaMPMiE34uA0Y3xVESf3+99i1PwUgFcPWgAAAABJRU5ErkJggg=='
};

const bodybigun = {
    name:"bigun",
    family:"bigun",
    size:128,
    CarPositionOver:12,
    CarPositionDown:43,
    ArchPositionOver:25,
    ArchPositionDown:71,
    FrontWheelOver:36,
    BackWheelOver:94,
    RoofRefOver:34,
    RoofRefDown:40,
    RackOptions:[rackShort, rackMed, rackLong],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAlCAIAAADQs2DJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARbSURBVGhD3Zq/TxRBFMcPKxErWv8ANTGRxEJNDkQTBAprLO2NCYWNaClioZWx1sbC2gLQxB9wiZJooomNf4CtHcHC5PzufYfH8GZ2dnZu9uD4ZHO8XWbezHzfm52Zg5G1ybetVOZuX6bxZOE4DXD39V9jNYDdUBbOTX0wVh3qqSYygYEplYW6cofVjFKNYiXHua6mlQ3lClJlQ2XaVas29mh08veEubG48vKXsSL4dOs0jcpakSVRrFYHFNIKCbu6t/3HWLtUqAbJtpd2YKyMjfOJas+LO3nRrZiKJCapE9wqvK14s3jt+Wdj7RKlGmYoaoqCAVCGRrvdxufT1j98oisyvM1T34tft1qVrspgE1vtS163Qrx/6TMQt7DpGeK68zSkmsgUr5oCVdgP3mJsyWIp6PnN/A+MLZdb+oTBDkMvGExJJdwx89NBScaHh43k6ekF473Y+UIb6YaQ4FNCblOqWl6Y87kSrTmkh4gHrhur53lrb7mAX7VcidacTLbnvK3IZGS60VZLh0c1kSwL3gwfCuxcU4Rm6M+NqyrRZjdmjHUIQDw48RtCco2Bhxq9xwVaNUk0GPi0i/ZD3tf2YECiSbfVjNmnGjTC0gu9cMmOAa82PsEWrNPpqPdiGFWYkciC7TmjWyCe5aXmMmLv16AalUJyerMDOyOcrtSWUs5b7m5bhQi421GBeyUvrh+CfvLVIzuGMryHQuJ2G7gtopgsFHuq2ZLxCaF88lCpqQqXoZxUEijvhjPeLYkcgrcPPJP6VUMFiUBZnIE3SiRQKyPsqrnJStnQmG4e1VghPGyv00CVhobXnGo29mCp2r7VAJ1ACQw+MH4UEC8sKRcfHj3coRnVJNEqEY3C5aEsXvy4ugsnzaPeUsDLjt4wovdrkdpVAj9Yth4sj07PfzOPWi3c4sLzXK0cFOa9Fp9rw07aq5CTAxLxsKTfa8bKyrDPRxejWtOJ1lA8Etwi0VCrz/4UqsmZvKFVPHA06YfkFMYwa43UbahQDadLe6XLC5os+75leClU47Gc933C5LcvJNrRW2eKNZTfGWBDgEHGpK53aqhp2NBkF9gHNDqYhgjC//jmmYnJF2Y1oGS0w9ALDhbqwrHWvli4UQaQwt78AIVq8n034hbWDl4QXmhk7svBvsZ2FRmSeChZc4mGkSrJ7CAVM3T22p3COvsVn+FJysFHptLK2Li4CrttjrJolS1QKn9t4fgrztA91QCEq1St1uwT4Q5QtfgO22G2gXai5t7ZYP39s+mtV7h6zz3JScriFkZqpVUPE/ZZSzKAwl6HKgFBoRp2uR9XL/AeYrOQEi5tzKrTeYXzhlaoKxlxhcOtPJG/2I10u11awP5+QnLV9pLQD/lnpAB1J6/oxe2Ot3qaasB+q+Dz4f0d/qePsD71rlBNtriLi4s0XJZPrBirPjHCZSdNMiIdhmQ0BCrYWw02ZsJngz7/FD+3ed1YA4TfgPWJ92+G20s7/wFPnbwy2CezcAAAAABJRU5ErkJggg==',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAKCAIAAACok55WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC6SURBVEhLY9xhu4sBCXgcdoOycAA09UMUMEFpMCDoZyAgRs3gByjeHjkAkchJisbBkNSJdzCma4dqbJMUSZiKyfT2wOZwr6PuUBbRwOuoB5QFBtBEDvcGwdRLvEraAc8j7v///4dyiAPs7GwbzbZAOUBvQ2kwINInA+tzYLwB/QzxNjEOQE6YcPXo9TaRAGLWgHgbaDUzM/Pfv3+Jtx3Z5xBAprcHCkA8wMnDvd5wPUSESAD3Oci/DAwAqkdHvFJ+9SkAAAAASUVORK5CYII=',
    };

const bodytwofer = {
    name:"twofer",
    family:"twofer",
    size:128,
    CarPositionOver:12,
    CarPositionDown:40,
    ArchPositionOver:21,
    ArchPositionDown:70,
    FrontWheelOver:33,
    BackWheelOver:94,
    RoofRefOver:32,
    RoofRefDown:37,
    RackOptions:[rackShort, rackMed, rackLong],
    RoofOptions:[],
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ/SURBVGhD7Zo9T1RBFIbFSkNnyw8wJiaSWKjJomhikMJY2hLbjZ0WgIWFH40mNtsqjYW1BcRG1E2URBJNaPwBtHaIHb7Lezw7O1935n4sC8uTyd2Zu3PvzDz3zOws7MTazIcT+Wx9vi65NB68+yu5g+DF3VOSy+H81Y+S85EqzmvqYHWUJu4Rg7IqeA0Wi1Nlh1RTFdSg665AXPqUrEtriWnV6BNlf/LEPZ88I7kx5vbqhffzP5FZ3PnNM6Qg4uDu08JZKYwGDIH0KMutb6Lhj8vXOl+ZJwXibrWv4KjXTD47jePO0i6LITDB0dK1lV8qnXfg5S4z29OS+4/VosVG6zKOpgvUD90cuPXTUe8Z4ixrAJ0rtEbgDhFOcVaTLrgt3KnolPpwoc8mvb6UM/G6OymvAdAzyeUzanM8l/jYg+L4eWquiJG5MIbEIk6XRiVxnh4xxZzjlo2YuNKLAuACJIURoMpYFC76xC/O3fc2GkSJgaygfpaI3Pun4Bd3qfuNmeU/i0zIN9H8yOIuUxYecQw3bpc3H66/2gd5NaggDL3J2peZEe7FqtB0/dKYNiesfRzawNr0ZLkXXNw3WqTPEW6yQo/OvQ/rSyENXIKvRFLIJDIQ9ln3oYRLtm4z/OJq2YJl3SdeOTJxrOHVAppzb8se6h54QJxpDRmePIYwtCGUQWeLw9FVBpXeZ+5GuwY5jtYkis/xeMRZmJ0pF3HmHcyO6fnQ0HCeQdcX57Xm9slsEngbwEnep8SQ0kFD1edpaGLhqVtDs8QNfKoWWgO4kknKDtjKfJn6wY+XFFCZScrDBWPUBFlMoYFLbp9exM3duI/cy8dbOHKWAe/FKZj2E29SLjyHHHGAk2lgqsLd7MZbdKLcGFxqGVWcepvQmciiF1OcTNWJc99xDOkfDmidvR8maJQJzwBJi/J2mP4a12h0NEE8OhLBqHVdM5O8HaYvLkXz0cONNSZ5exDzUXm+q44VVqAx+pDk7TAirvbdQC3zaPig20xSDiPiWq1W+s7rGNATN/f5JguFWAuBmaRGNQ5RnGascWoH33LdVKO+Q4GI63a7zBBLgUqhI560cPVhrWUmnax9nNXJWkAHIn0wW5RvDvoHJfM9HTlPhpRZ8BcnvFWWO9THx1n6bA3dHyPH9kIKpdBPVbMzlDC/dmd65g0yIk5/I8K3FY4fmURrRH+tkyUO8GknuvOKM61FdhUpZnm5diYmzrJmkiUOlHOHDljdjWCJo3TTSG6fFe08QH/Me/bF7e3t4QVr3KOnwX8AluiB2TZJMUgXUFBCnPXUS1sjbv+V9dWLOIo4AHfYzTGvzM5v4liuE5G2SVYwxrGsgcbF9f4eF93HwV1D4pqjojWgnacmCwSZiLO2IyZV/g99IO6qWyPovNcaEHHIue46nQ6OC9v3WBxPJsM//BBxx4RYmXqNY7vdZpHsLO3+A0uV7aPLtkO2AAAAAElFTkSuQmCC',
    imageArches:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAALCAIAAACF5oa3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACgSURBVEhLY9xhu4sBG0h/lAplIYGZcrOhrOEFsIQCVv8jg+EXFkxQGgYIBgEQEKNmaAGUUCDee8MsIFByBKl+GwxZg+z4QHY8Ii0MxeilxM3IetHLBZLAUAw4rICiUBhYQMU4gJYLcBOJzOrILhiQ0oFaQQBxPCgUSA0CCKBiVFAOiHc5prOBehnl5eXhHAiDeIBmIhkmkAcotBc9IBgYAGbpPvfCmyjJAAAAAElFTkSuQmCC',
    SecondaryPositionOver: 14,
    SecondaryPositionDown: 40,
    imageSecondary: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHnSURBVGhD7ZihTgQxEIb3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFczhAwaBIML4EhJEj+5W/met1uO+0u7HHXT9y1l9nu9mtntjAa70yqFF6f9k1Lx9ntl2kNweXxqmmlsLn7YFqzxGV57QyrIJuwO0zKCXCshWSJpn+qpgtizfbVKkufbn2pzEiZX11FPk9c1sXaumktMUf3W3eHL2icf77zl9adBV+PJxumMx9wqfW7KTXeRrY5Lh9fPbPdKuvgdBufEqcEyYvR967fRHR4BN7FJhzP4mDPPzVej7iWW6zwyyHPFECGy5qA6AgMgFy7G0AqCC/Rx2dAxZiOrKhfFpAJZDBv+ZtK29w9srh1paoVBP/OslNpmZFMZNcvK68iElzbJYV7p8tcBJYtV5b+LDoUvUw+D1dWl9fHYhAoQTOyuK14bG2egDQ4V0UH+eP4bGhweijFuKg1fAl6k1G//zEOTg9tS9Qch/GmowOX4M8R00kkMBE+M7aL/TwswTDjyurliJQ0Tjg4kBTOlHoBt2sOyyfEAdjIsk2h8RNTMHALQ+JUFj5tTeVQ2qQu8MWUEvM2LKY01LJQ1ZiW0FRMBahloXThbVo0RRlVNx/IwWJKQ72zej+tLCq1rOj/GwvEvA0LcarqG4bzA1CXSphhAAAAAElFTkSuQmCC'
};

const bodytwofer13 = {
    name:"twofer13",
    family:"twofer",
    size:bodytwofer.size,
    CarPositionOver:bodytwofer.CarPositionOver,
    CarPositionDown:bodytwofer.CarPositionDown,
    ArchPositionOver:bodytwofer.ArchPositionOver,
    ArchPositionDown:bodytwofer.ArchPositionDown,
    FrontWheelOver:bodytwofer.FrontWheelOver,
    BackWheelOver:bodytwofer.BackWheelOver,
    RoofRefOver:bodytwofer.RoofRefOver,
    RoofRefDown:bodytwofer.RoofRefDown,
    RackOptions:bodytwofer.RackOptions,
    RoofOptions:bodytwofer.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARKSURBVGhD7Zo9a1RBFIaNlZLONj9ABMGAhQobjYLEFGJpG2wXOy2SWFj40SjYpNU0FtYWCTZGXdCAAYU0/oC0djF28U3e49nZMx87c/fezefDcHfm7tz5eO6Zu7PJjixPfDhRzvrn65LL48G7v5LbC17cPSW5Es5f/Si5ELnigqb2Vkdl0h4xKVMhaLC/OFV2QDUNghr03fURl78k69JaYVk1ekc5njJxz0fPSO4Ic3vpwvvpn8jMbv7mGdIn4uDu08xZKewPGAL5UZZf36+p4Y+TywtfmSd9xN1qX8FRrxl9dhrHzbktFmNggaOna4u/VDpb4OU+ExvjkvuP6dGw2rqMoztD1I81Dtz6+TWJ2tQhkZQ4Yw2gy77WCNwhwinOdOmDZuFORefUxwz13uTXz68p5V2C7k7KawSMTHLl7Lc1Xkp67lFx/Dx1n4i4G5I7Jh1x+mhUMtfpIVPMlWtspMSZpV4Erh1kmddO/lwSNfnQJ2Fx/r630SDKDGQF9Ytuan77+TXD4i51vjEz/2eWCfnS6R1o/MeUISCO4cbt8trDlVe7IK8GFYRhMJl9mRvhQUyF5uqXtmxwbY6YfRyuxLPpyfxOcHE3aMhfI9xkxW6d3w7rSyEPXIKvRFIoJDERjln3oYSPbN1mhMXVsgUraiddObFwzPRqAd35zXKEugfuEedaQ4YnjyEMbQhl0FlxOPrKoDJ4z/1o1yDH0Syi9BpPR5zBHUy1iHNbcAem52NTw3kGXVdc0Jo/JrdLEOwAJ9lOhSnlg44GX6exhYW7bqZmxPV8qva1BnAlk5Q9sJX5MvaDHy85oDKTlIcL5qgJsphiE5fcLjsRN3XjPnIvH6/jyFUGghfn4NrPbKRaeA454gAXU89ShbvJ1bcYRLU5+NQyqzT1dqErkcUgrjhZqiPnvuMY0z8c0DtHP0zQKRPuAZIW5e043Wdco9HRBOnoyASz1ueam+TtOF1xOZoPH36sMcnbvbi3KvBd9UhhAo3RhyRvxxFxte8GallHwwfDZpJyHBHXarXyd17HgB1xU59vstAX8yBwk9QYjAMUpwXPOLWDb7l+qlHfgUDEdTodZohRoFLoiCcNvj48a5nJp2gfZwZZCxhAYgxuj/LNQf+g5L6nM+fJmDIDf3HCporcoT4+zvJXa6x9zBzbCylUQj9V3cFQwvTynfGJN8iIOP2NCN9WOH9kMq0R/bVOkTjAu53pLijOtZbYVeSY5eU6mJQ4Y82lSByo5g4DMMNNYMRRumukdMyKDh5gPG6bXXHb29t4wTPu0dPoPwArjMDtm+QYpAsoqCDO3PXK1og/fmVl6SKOIg7AHXZzzCuT02s4VhtEom9SFIxpjDXQuLidv8cl93Fw15C45hjQGtDBU5MBQSbizHbEZZD/Q++Ju8GtEQw+aA2IOOR8dwsLCzjObNxj8WgyGv/hh4g7Jsbi2Gsc2+02i2Rzbusf36kDBYj0pXAAAAAASUVORK5CYII=',
    imageArches:bodytwofer.imageArches,
    SecondaryPositionOver: bodytwofer.SecondaryPositionOver,
    SecondaryPositionDown: bodytwofer.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHsSURBVGhD7ZihTgQxEIb3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFcMAQMmgTDS2AICZJ/+Zu5Xtttp7sLt7D9xF33Mu1tv3ZmezeZbt1VObw87pqWjpPrT9NaBOeHy6aVw/r2vWnNk5YVtLNYBa2Ju8OknADHWkyWaPqjarog1mxfjbL06daXyhYp86OryPtJyzpbWTWtEXNwu3Gz/4zG6ccbP2ncWfD1cLRmLoYBl1q/m/TxfqRsc3w4vXhiu1HW3vEmXiVOCZIXo+9cvoro+Aj8Fpt4PIuDPSt9fO7IYlA6LvHNoZ0pgAyXNQHJERgAufZlBKkg7KKP10cKFIfpyIqGZQGZQAuGlr+5NM09IIsbUqpaQQjvLDuVxoxkIi/Dsuw6lwv6dknh3tHPJRLJsuXKYg4OmS4L2RFXlv9QGBuREjQni9uKx1b/BKTB6ZUc5Nfic0d2oMHZoRTRqDV8CAaTUb//MQ5OD01L5I/DeHOhA13wc8RcZBKZCO8Z28W+H5ZgmHFl9XJEyhonHhxJCmdKvYCv84flHeJYa2TZptD4jikYuIUhcSYLr7amcij1qQt8MaXEPA2LKQ21LFQ1piU0FVMRalkoXXiaFk1JJtXVO3KwmNJQ76zeTyv/lVpW8l/EAjFPw0KaqvoCmi8TeieeU6EAAAAASUVORK5CYII='
};

const bodytwofer15 = {
    name:"twofer15",
    family:"twofer",
    size:bodytwofer.size,
    CarPositionOver:bodytwofer.CarPositionOver,
    CarPositionDown:bodytwofer.CarPositionDown,
    ArchPositionOver:bodytwofer.ArchPositionOver,
    ArchPositionDown:bodytwofer.ArchPositionDown,
    FrontWheelOver:bodytwofer.FrontWheelOver,
    BackWheelOver:bodytwofer.BackWheelOver,
    RoofRefOver:bodytwofer.RoofRefOver,
    RoofRefDown:bodytwofer.RoofRefDown,
    RackOptions:bodytwofer.RackOptions,
    RoofOptions:bodytwofer.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARQSURBVGhD7Zo7bxNBFEYJFSgdbX4AQkIiEgUgORCQUEiBKGkjWosOiiQUFDwakGjcQhoKaopENITEEkQiEkhp+AFp6ULowud8l+vxvHx3veu8fDRaz6xnZ2fO3hmPE4+tTH06VZyttZuSs/How1/JHQSv7p+RXBEuXv8suRhWcVFTB6ujNHmPGJRXIWqwvzhVdkQ1DYIaDN31EWefklVpLTGtan2i7E8xcS/Hz0nuBHN3+dLH2Z/IzO/85hnSJ+Lg7svceSkcDhgC9iiz1w9ravjj5ErrK/Okj7g7zWs46jXjL87iuLOwy2IKTHDc6cbSL5XOFnh5yNT2pOT+493RY6NxFUd3hKifahy49e011yd+7J8TvFHnxHnWAG7Z1xqBO0Q4xbktREGzcKeiLfUxQn029vr2mrDmjRQ23MtPy2sC9ExyxTlsc7xakuL4eequiHgakhuRjzhdGhXjPD2Wij0bOXFcI8vBBUgKhwD7WFgzDBFs5bjok7i4cN9baxAZA1lB/UIP1d6+vWZc3JX2N2YW/8wzIV90eMebiDiGG7fLm49X3+yDvBpUEIbR5O3L3AiP4lWor769ZjjngLvMjXn7OFyJtenZYie4uBv0sM8RbrLCTxgStsP6UrCBS/CVSAoFyQyEfdZ9KOGSrduMuLhKtmCF2slXTtkH3vAqAbcLm2UPdQ/cI861hgxPjiAMbQhl0PnicAyVQWX0mYfRrkGOozeJ8nM8H3EebmfKRZzbgtsxPZ8aGs4z6LriotbCPrm3BNEb4CTbKTEkO7jR4PM0NbHw1L2heeJ6PlX7WgO4kknKAdjK4BsyP14soDKTlIcLxqgJsphSA5fcPp2Im7n1ELnXT7dw5CwD0YstuPaNjZQLzyFHHOBk6pmqcDe98R6dKDeGkEpGlafaW+hMZDGKK06m6tiF7zim9A8H3J29Hya4KROeAZIW5e003TWu1uiog3x0GMGodV1zk7ydpivOovn4EcYak7zdi/uoIt9VTxReoDH6kOTtNCKu8t1AJfNo+KDbTFJOI+IajYZ95zUCdMTNrN1moS/eQuAmqTEYRyhOC6xxagffcsNUob4jgYhrt9vMEE+BSqEjnvQI9WGtZcZOoX2c18lKQAcyfXDvKN8c9A9K7ns6cp5MKfPgL07YVCF3qI+PM/tsTbWPkWN7IYVS6Keq2xlKmF25Nzn1DhkRp78R4dsKx4+M0RrRX+sUEgf4tI3uouJca5ldhcUsL9fO5MR51lwKiQPl3KEDXnczeOIo3TVStM+Kdh6gP26bXXF7e3t4wRr35HnyH4AleuDem1gM0gUUlBDnPfXS1kjYf2V1+TKOIg7AHXZzzCvTs5s4lutE5t6kUDDm8ayB2sV1/h6X3cfBXU3i6mNAa0A7T00eCDIR521HXAb5P/SBuBvcGkHno9aAiEMudNdqtXCc237A4slkPP3DDxE3IsXSxFscm80mi2RnYfcfNp4EszG0th0AAAAASUVORK5CYII=',
    imageArches:bodytwofer.imageArches,
    SecondaryPositionOver: bodytwofer.SecondaryPositionOver,
    SecondaryPositionDown: bodytwofer.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHhSURBVGhD7ZihTgQxEIb3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFczhAwaBIML4EhJEj+ZSZz3bbbzu4WboH5xF33Mtvbfp1OezeZbs2qLjw/7HJLx8n1B7cWwfnhMre6sL59x60meVlRO4tV0Ju0OwzKC/CspWSJpl+qZghizfXVKku/3Eqp7LFkvnUW6Xnyss5WVrn1jzm43bjZf0Lj9P2VPmnNLPi6P1rji3FAU63PJn18GClpjg+nF4/UbpW1d7yJV4lTgsWL3ncuX0R0ugf6Fpd0PBUHd1T6+OGRS/zepJ8pgBUucwKyPVAA5LqXCaSC0C36+CGRMqNxWUAG0IOxrd9SRGRRQkpVM4R4ZrlLyRAbcVluBe0KFXi+GAH6sbRFopxR2fJl0RocM0MmciC+LNkUjJCGLEorOraGJyAN3l3ZTn4sXh8ZXVtUtuaHUkSj1tAmGL1Bn//oB6eHtl0i7Ifi+UIHbsHPEb7oSGIg9MxIF/d5qATDjC+ryBGpUz/p4MS+7A2pCPi6sFt6QhxWWZZrCo2vGIOhFIbEuSy8uprsUBpSF3gzpYR3QzOloZaFqkbLEprMVIJaFkoXdlPTlGVSXb1hDZopDXVmFT+t/FVqWdl/EQ2Cd0MjT1V9AiTODdYo6MeWAAAAAElFTkSuQmCC'
};

const bodytwofer21 = {
    name:"twofer21",
    family:"twofer",
    size:bodytwofer.size,
    CarPositionOver:bodytwofer.CarPositionOver,
    CarPositionDown:bodytwofer.CarPositionDown,
    ArchPositionOver:bodytwofer.ArchPositionOver,
    ArchPositionDown:bodytwofer.ArchPositionDown,
    FrontWheelOver:bodytwofer.FrontWheelOver,
    BackWheelOver:bodytwofer.BackWheelOver,
    RoofRefOver:bodytwofer.RoofRefOver,
    RoofRefDown:bodytwofer.RoofRefDown,
    RackOptions:bodytwofer.RackOptions,
    RoofOptions:bodytwofer.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARxSURBVGhD7Zo9T1RBFIbBSkNnyw8wJiaSWKjJomhikMJY2hLbjZ0WgIWFH40mNtsqjYW1BcRGxE2URBJNaPwBtHaIHb7wHs7OnvnYmbt3F/l4Mrl75t5zZ86898zcWdjR5cmPI+VsrN4QK4+H7/+KdRC8vHdarBIuXPskVohc4XylTLtjz8+INTIyuTkh1j7Lra9i7XOA/mkd8YyNQ1DB3sKpZG7W+IG6IGg31rQzGLJ/Pqqgr90p+YzgJhpa0SKnQriPOgfjn24c0D8zGFAaj0tihUll3Iuxs2IdY+4sXfww8xPG3NZvniE9piq0+zx7Tir/B0yx/LdNvr/vqemMk2ZB6CHc7eZVHPUepv3W/DarMTDB0dP1xV8qOluIzRp/ATI9GtYaV3B0Rwj/xJR0/fM9iaqpIZGUcEY1gC57qkagHTKcwpkufdAstFOhc/wxQn02+f75nlLfI6hdj5cDIhOrnP9tjpeSHntUOL5P3RURT0OsE9IZp0ujkjlPj5jEnLlGjZRwZqoXgXv7mea1kz+WhCcXfRIWzt33koEmUWYiK/Aveqj57ed7hoW73P5GY+HPHAvs0uEdavxlyhAQjunG7fL6o5XXe8BWBRWkYbCYfZmb4UGMw+D8S1s2uGqOmn0c7sTa9HRhN7m4GzTkzxFusmKPzm+H/lLJA7fgK5FUCkkMhDHrPpRwydZtRli4WrZgRe2knRMTxwyvFtCd3ywj1D1wl3CuajB48gTC1IagTDorHI6+ZJAy+Mz9bNckx9FMovQcT2ecwQ2mWsa5LbiB6fnY0HCeSdcRLqiaH5PbJQh2gJNsp8KQ8kFH/c/T2MTCUzdDM8J1vVV7qgZwJ4vUPbCV+TL+g6+XHODMIvXhgjFqgVgssYGLtcduxk3ffADr1ZMNHDnLQPDmHFz1Mxuplp5DzjjAydQ1VaHd1No7BFFtDD61jCpNvV3oTGQ1iCucTNXR899xjMk/HNA7ox8m6JQFzwBFq3I5TmeNG2h2DIJ0dmSCUeu65ha5HKcjXI7MRw8/11jkcjfuowp8Vz1WmERj9qHI5TgiXO27gVrm0fBB2CxSjyPCNRqN/J3XCWBXuOnVW6z0xCwEbhGP/jhEeVqwxqk6+JbrlxrlOxSIcO12mwYxEqgo1IgnDb58WGtp5FO0jzNB1gICSMTg9ijfHPQPSu41HTlPxiQz8BcnbKpIO/jjdZY/W2PtY+TYXkilEvpWdYOhCDPLdycm38IQ4fQ3IryscPwwMlUj+mudIuEAn3amdkHhXNUSu4ocZXm7BpMSzqjmUiQcqKYdAjDhJjDCUXRXkdKYFQ0eIB63zY5wOzs7+MAa9/hZ9B+AFSJw+yY5ClILSFBBOPPUK6tG/PiVlaVLOIpwANphN0dbmZpZx7FaEIm+SVEypjGqgYELt/v3uOQ+DtoNSLjB0adqQIOnTAYkmQhntiMu/fwf+kC06181guCDqgERDpavXavVwnF28z6rx5Ox+A8/RLgTYiyOv8Gx2WyySrbmt/8BC50j7h5ET+EAAAAASUVORK5CYII=',
    imageArches:bodytwofer.imageArches,
    SecondaryPositionOver: bodytwofer.SecondaryPositionOver,
    SecondaryPositionDown: bodytwofer.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVGhD7ZihTgQxEIb3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFcMAQMmgTDS2AICZJ/mWGu13an09tl2bD9crlrN9O59u/MtHeT6dZdlcPL4y63bJxcf3LrLzg/XOZWDuvb99yaJy1WqE6TL7B3vMmtH6YXT9yK0bO9rh321TPwVqqJJTK50aFPDrjzSxqDPu3tiGquXkv8GeAGFEbKix/9Akbn/UwmWj3ikXW2ssqtEXNwu3Gz/4zG6ccbPWlMQ+j1cLTGnWFAoWQ/Mez2oaWELR5KsjeKRaluKQouSF5437l8FaF1D2FB0e2pOLirstvnehYFZWC8Zi2mFEA5lD0BSQ9kAHHdroKUWxpit7dbCiQcliM72ljgZQELMLT8zaVp7RGxKCClqhWEeGS5qTRmJBOpGxfLrXO5YGybFO4c+1oUSypbvliUg0OmzUa2xBcrPBTGhlKC5sSisKJra3gDsuCNSjrpzT7XswcpOLuUwhq1hg7BaDLa4x9+cHto2qLQD9lzxwaG4OcIdzJRFkJzRri486ESDGV8sTq5ImX50Y2VpPCW1An4utAtzRDXWhbLVQqNb5sCQyEMEWdi4d2VqVxKQ+oCX5QywqdhUcpCLRaqGqUlZCpKKdRioXThNC0yJZlUV+/IwaKUhTqyOr+t/FdqsZL/IhYIPg0LaarqC1nvKfsWZw8MAAAAAElFTkSuQmCC'
};

const bodytwofer23 = {
    name:"twofer23",
    family:"twofer",
    size:bodytwofer.size,
    CarPositionOver:bodytwofer.CarPositionOver,
    CarPositionDown:bodytwofer.CarPositionDown,
    ArchPositionOver:bodytwofer.ArchPositionOver,
    ArchPositionDown:bodytwofer.ArchPositionDown,
    FrontWheelOver:bodytwofer.FrontWheelOver,
    BackWheelOver:bodytwofer.BackWheelOver,
    RoofRefOver:bodytwofer.RoofRefOver,
    RoofRefDown:bodytwofer.RoofRefDown,
    RackOptions:bodytwofer.RackOptions,
    RoofOptions:bodytwofer.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR0SURBVGhD7Zo9TxVBFIbBSkNnyw8wJiaSWKgJKJoYpDCWtsSW2GkBWFj40WhiQ6s0FtYWEBtRSZREEk1o/AG0dogdvvAeDuee+bize/devu6Tyd4zu2dnzrx7ZnYu3MGlsY8D1Vn/ckOsMh6+/yfWQfDy3mmxqnDh2iexYpQKFyrl2h16fkasgYGxjRGx9lia/ybWHgfon9cRz9g5RBVsL5xKZrMmDNSCoG2seWfQY/9yVMFQu1PymcAmGlrRIqdi2EddgvPPNw7oXxgMqBqPJbPC5DLuxdBZsU4wdxYvfpj8BWNm8w/PkDZTFdp9njonlcMBU6z8bVPuH3pqOuOkWxDaCHd7+iqOeg/TfnN2i9UUmODo6frCbxWdLaRmTbgAuR4dq6NXcLQjhH9mSlr/cs+vwz93zwlu1DnhnGoAXbZVjUA7ZDiFsy1EQbPQToUu8ccI9dmU+5d7QjU3Uqhhb2/zckBkYlXnsM3xZkkKx/epXRHxNMTqk8+48E1fOE+PpcROjZxwXCPrwQVIKoeA8rHQM0wR7IG56JO4cHbfS7qaRIWJrMC/0kMtb7/cMy7c5ZXvNOb+zrDArjq8401EOKYbt8trj5Zf7wJbFVSQhtHi9mU2w6M4h+75l3uGcw7YZW7Q7eNwJ9amp3M7ycXdoKN8jnCTFb5hSNgO/aVSBm7BVyKpVCQzEMas+1DCJVu3GXHhGtmCVWon75xSH7jhNQK6C5tlhLoHbhHOqgaDJ/sQpjYEZdJ54XAMJYOU0WceZrsmOY5uEuXneD7jHDaYehlnW7CB6fnU0HCeSbcvXFS1MCbbJYh2gJNsp8aQykFHnc/T1MTCU3dDc8K1vFXbqgZwJ4vUA7CVwTdkvl5KgDOL1HsLxqgFYrGkBi7WLjsZN3HzAaxXT9Zx5CwD0ZtLsOoXNlIvPXuccYCTqWWqQrvx1XcIot4YQhoZVZ5mu9CZyGoUK5xM1cHzP3BMyd8b0Duj7yXolAXPAEWrcjnN/hrX1ezoBvnsKASj1nXNFrmcZl+4EpmPH2GuscjlVuyjinxXPVG4RGP2ocjlNCJc47uBRuZR70HYLFJPI8KNjo6W77z6gB3hJr7cYqUtbiGwRTw64wjlaYU1TtXBt9ywNCjfkUCEW1lZoUGcBCoKNeJJRygf1loa5VTax7kgGwEBZGKwPco3B/2Dkr2mI+fJlGQO/uKETVXSDv54nZXP1lT7GDm2F1Kphb5VbTAUYXLp7sjYWxginP5GhJcVjh9GoWpEf61TSTjAp12oXVQ4q1pmV1GiLG/XYHLCOdUslYQD9bRDAC7cDE44im4VqRqzosEDxGPb3Bdue3sbH1jjHj9L/gOwRgS2b1KiILWABDWEc0+9tmokjF9ZXryEowgHoB12c7SV8ck1HOsFkembVErGPE410HXhdv4el93HQbsuCdc9OlQNaPCUyYEkE+HcdsTSyf+hD0S7zlUjCD6qGhDhYIXazc/P4zi1cZ/Vk8lQ+ocfIlyfFAvDb3Ccnp5mlWzObv0HYoMlnHeCZrcAAAAASUVORK5CYII=',
    imageArches:bodytwofer.imageArches,
    SecondaryPositionOver: bodytwofer.SecondaryPositionOver,
    SecondaryPositionDown: bodytwofer.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH1SURBVGhD7ZgxLwVBEMfvqSQ6X0IjUSsQHYVaq9dqfAKNVq+kVhCN0KglGl9CIxKl/5kxb97u3u7cu3MuzC/C7mV23+7/Zv673uRm47Zqw/PDNrdsHF1+cOs3ON1f5FYbVjfvuDVLWaxYnaa5wM7hOre+uTl75FaKgePz2uG9BgHBTnNiiUw6O/KLA3p9xWAwZLwdUU3rtcB/I3RCYaT88KMfwDj5MItJukc6s06Wlrn1j9m7XrvafULj+P2VnjSWIfS6P1jhzjigVLKfGPb4OFLSFg+l2BvFolK3mIIGxYvZt85fROj8DLGh5OPJHPSu7PHdI9OeNZ9SAHaoraQ4AwVAXN3NIHZLQ+zxXSLljTYavGxgDsZWv32REIsSUlzNEdKZpUvJETXSYmkHbQsZPHdGgH0vTZGwM7KtUCyqwTHT5UV2JBRLDgUnZkYsSiu6tsY3IAvBqOIkg8XbI5O1RbY1vZQiGl5Dh2BygD3/MQ9uD02nRDwPxXPHBobg3xHutCSzEVoz0kWvhywYyoRi9XJFajVPPjhzLgdb6gV8XDwtrRCXVRZLK4XGV4zDUApDxKlY+K1l8ktpTG3wrpQRPg1dKQu1WHA1KkvI5EplqMWCdeE0dZmKTKqLN9SgK2Whzqzebyt/lVqs4reIDsGnoVOmqj4B5H8kV/UzUxwAAAAASUVORK5CYII='
};

const bodytwoferP = {
    name:"twoferP",
    family:"twofer",
    size:bodytwofer.size,
    CarPositionOver:bodytwofer.CarPositionOver,
    CarPositionDown:bodytwofer.CarPositionDown,
    ArchPositionOver:bodytwofer.ArchPositionOver,
    ArchPositionDown:bodytwofer.ArchPositionDown,
    FrontWheelOver:bodytwofer.FrontWheelOver,
    BackWheelOver:bodytwofer.BackWheelOver,
    RoofRefOver:bodytwofer.RoofRefOver,
    RoofRefDown:bodytwofer.RoofRefDown,
    RackOptions:bodytwofer.RackOptions,
    RoofOptions:bodytwofer.RoofOptions,
    imageBody:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAApCAIAAABWevs/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQJSURBVGhD7Zo9T1RBFIbFSkNnyw8wJiaSWKjJomhikMJY2hLbjZ0WgIWFH40mNtsqjYW1BcRGhE2URBJNaPwBtHaIHb7Le3J2dr7uzP1YXNgnk7tzv88898zcWdiJtZlPp/LZ2bgptTQeffgrtaPg1f0zUsvh4vXPUvORKs5r6mh1lCbuEY2yDvAaLBanykZUUxXUoOuuQFx6l6xLa4lu1egTZTx54l5OnpPaCebu6qWP8z9RWdz7zS2kIOPg7svCeVkZTUIpnJKnei4OXut8ZZ0UiLvTvoalnjP54iyWe0v7XA2BDo473Vj5NerSAd3libOsAYgrtEbgDhmeJU5Fx4c5M1OG82y87k7LZwBEJrV8SjcJIUaKHNQ88bYHxfF9ao6I7KdjSCzj3C6T2E+PmWKmuWUjJq5Kv8C5Vbr5/wkHfeIX5857x/3Uwi/uSvcbK8t/FllQT+ynx4P4mx14xDHdOF3efrz+5hDU1aCCNPSWmd1pHoDbm4UbRxezCfY8Dt0YY9Oz5V5ybbWucqNJ+sCXO8nKPR7gFHwlkpVMIg2hIGseyiFbpxl+cbXMKrOuEz84kq250+wUcDv3soxQ58AD4kxrqHDjGMLUhlAmnS0OS1cZVHqfuZvtmuRYWp0o3sfjGWdhBlMu48wrmIHp9lDTsJ1J1xfntebGZN4SeG+AjbxOiSalgxtV76ehjoWnbjXNEjfwVi20BnAmi6w7YCqzOfWDr5cUcDCLrA8XtFELZLGEGi61Q3oZN3frIWqvn+5gyV4GvCenYNpPvEi59BxyxgF2poGuCnezW+8RRLk2uNTSqjj13kJ7Ile9mOKkq05c+I5lSP9wwN0Z/TDBTVnwDFB0VXaH6Y9xjWZHE8SzIxG0Wsc1s8juMH1xKZqPH26uscjuQcxH5fmueqKwEo3ZhyK7w4i42mcDtfSj4YOwWWQ9jIhrtVrpM68xoCdubuM2VwqxBgKzyBHVGKE8zRjj1A6+5bqlRn0jgYjrdrusEEuBSqEjbrRw9WGsZSWdrHmcFWQtIIBIDOYd5ZuD/kHJ3Kct58aQMgv+4oSXynKH4/E6S++toeuj5ZheyEop9K1qBkMJ82v3pmfeoSLi9Dci3K2w/agkWiP6a50scYBPO9GdV5xpLTKrSDHL0zWYmDjLmkmWOFDOHQKwwo1giaN000huzIoGDxCPec2+uIODA3xgjHvyPPgPwBIRmPcmKQbpAgpKiLOeemlrxI1fWV+9jKWIA3CH2Rzryuz8Npblgojcm2QlYxzLGmhcXO/vcdF5HNw1JK45KloDGjw1WSDJRJw1HTGp8n/oI3FX3RpB8F5rQMSh5rrrdDpYLuw+4OrJZDL8ww8RNybEytRbLNvtNlfJ3tL+P6YQ0yhglCUIAAAAAElFTkSuQmCC',
    imageArches:bodytwofer.imageArches,
    SecondaryPositionOver: bodytwofer.SecondaryPositionOver,
    SecondaryPositionDown: bodytwofer.SecondaryPositionDown,
    imageSecondary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAbCAIAAAAF9L0XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHFSURBVGhD7ZivTgQxEIf3UCQ4XgJDgkYAwYFAY/FYDE+AweKRoBFcMAQMmgTDS2AICZLf3kx6vV47nXb3OJb2y+Uyt+n+6XfT6dyNxjsPTQpvz/sc6Ti7/eZoGVwer3KUwubuI0ezxGV57SxXQTayO0zKGeBYk2QZTQNV0wVjzfYVlKVfbn2pzFgyC/0W6Xnisi7W1jkqmKP7rbvDVwTnXx90JJhZ8PV0ssEfhkkoVTX5aM7F4PHVC8VBWQen23g345Rg8eLqe9fvQxcNyFdcVp4pAr6QvUmyjFy5bNkZ8Tvfh+NrZXLQA56Go3Syp4HHEl48aPGE5u6RRfugqWoVgz+z5OVQDpTOxoZfVpecx7ldlvDfhIq4K0vfixaIKyv0G7IchBI0I4vSitpWSrxUzFm4pf2ig8OFpjDtszBP1BraBL2LUV/IUpug1PEAp+DnCH9IRJgISXH6RCrBMOPK6qXTS7qOPFjIytTWVwNuN39ZekL0pSzLNoVgMqbCUApD4lQW3m1NtSmdpy3w1ZQS3g2rKQ2tLFQ1WpbQVE0JtLJQurCbVk1RRs3NJ9ZgNaWhzazeu5X/Sisr7x/RAuHdsBKnaX4AhoT+lMFGyoUAAAAASUVORK5CYII='
};

const bodies = [ bodybuggle, body3cube, bodykeegle, 
    bodytwofer, bodytwofer13, bodytwofer15, bodytwofer21, bodytwofer23, bodytwoferP, 
    bodybigun, 
    bodybrix, bodybrixP, 
    body039, body039Cd, body039Cu, body039Td, body039Ta, 
    body039Tu, body039TuCd, body039TuCu, body039TuTd, body039TuTa, 
    body653,
    body005 ];

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
    primaryColour:"#e6846b",
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
    roof:'',
    rack:rackLong,
    rackOver:0,
    rackItem:rackItemLongboard,
    rackItemOver:24,
    logo:logoWhtPlate,
    background:'',
    backgroundColour:"#6dd1bb"
};

//-----------------------------------------------
// Functions for website setup
//----------------------------------------------- 


// Coloris(
//     {
//         el: '.coloris',
//         theme: 'polaroid',
//         // theme: 'pill',
//         //swatchesOnly: true,
//         themeMode: 'dark',
//         alpha: false,
//         focusInput: false,
//         closeButton: true,
//         // parent: '.tab',
//         swatches: [
//             '#264653',
//             '#2a9d8f',
//             '#e9c46a',
//             '#f4a261',
//             '#e76f51',
//             '#d62828',
//             '#023e8a',
//             '#0077b6',
//             '#0096c7',
//             '#00b4d8',
//             '#48cae4'
//         ] 
//     }
// );

// Coloris.setInstance('.primaryColour', 
//     {
//         onChange: (color) => {
//             currentDisplay.primaryColour = color
//             setupBodyOptions();
//             setupGeneralOptions ( logos , "logoDropdownList" , 2, "logoChange" , "", false, colourReturn(currentDisplay.primaryColour) );
//             document.getElementById("primaryColourControl").style.background = color;
//             document.getElementById("primaryColourOptionDropdownButton").style.background = colourReturn(currentDisplay.primaryColour);
//             drawToMainCanvas();
//         }
//     }
// );
// Coloris.setInstance('.secondaryColour', 
//     {
//         onChange: (color) => {
//             currentDisplay.secondaryColour = color
//             document.getElementById("secondaryColourOptionDropdownButton").style.background = colourReturn(currentDisplay.secondaryColour);
//             drawToMainCanvas()
//         }
//     }
// );
// Coloris.setInstance('.wheelColour', 
//     {
//         onChange: (color) => {
//             currentDisplay.wheelColour = color;
//             document.getElementById("wheelColourOptionDropdownButton").style.background = colourReturn(currentDisplay.wheelColour);
//             setupWheelOptions();
//             drawToMainCanvas();
//         }
//     }
// );

// Coloris.setInstance('.backgroundColour', 
//     {
//         // swatchesOnly: true,
//         swatches: [
//             '#fe9ecc',
//             '#f74071',
//             '#a16fe2',
//             '#68c7d8',
//             '#fbd321',
//             '#fa944c',
//             '#dcc4aa',
//             '#6dd1bb'

//         ] ,
//         onChange: (color) => {
//             currentDisplay.backgroundColour = color;
//             setupGeneralOptions ( backgrounds , "backgroundDropdownList" , 0.3, "backgroundChange" , "", true, currentDisplay.backgroundColour );
//             drawToMainCanvas();
//         }
//     }
// );

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
    currentDisplay.primaryColour +  "|" +
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

    if ( currentDisplay.roof != "") {
        returnString = returnString + "roof"+currentDisplay.roof.name + "|"
    } else {
        returnString = returnString + "|"
    };

    if ( currentDisplay.rack != "") {
        returnString = returnString + "rack"+currentDisplay.rack.name + "|"
    } else {
        returnString = returnString + "|"
    };

    returnString = returnString + currentDisplay.rackOver + "|" ;

    if ( currentDisplay.rackItem != "") {
        returnString = returnString + "rackItem"+currentDisplay.rackItem.name + "|"
    } else {
        returnString = returnString + "|"
    };

    returnString = returnString + currentDisplay.rackItemOver + "|" + currentDisplay.logo.name + "|";

    if ( currentDisplay.background != "") {
        returnString = returnString + currentDisplay.background.name + "|"
    } else {
        returnString = returnString + "|"
    };

    returnString = returnString + currentDisplay.backgroundColour;

    return returnString;

}

function pickoutFromURL() {

    
    var currentURL = window.location.href;

    if ( currentURL.includes("?") ) {

        propertiesFromURL = currentURL.split("?")[1];

        properties = propertiesFromURL.split("|")

        currentDisplay.body = bodies.find(x => x.name === properties[0].replace("body",""));
        currentDisplay.primaryColour = properties[1];
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
            currentDisplay.roof = ""
        } else {
            currentDisplay.roof = roofs.find(x => x.name === properties[12].replace("roof",""))
        }; 
        if ( properties[13] == "" ) {
            currentDisplay.rack = ""
        } else {
            currentDisplay.rack = racks.find(x => x.name === properties[13].replace("rack",""))
        };
        currentDisplay.rackOver = Number(properties[14]);
        if ( properties[15] == "" ) {
            currentDisplay.rackItem = ""
        } else {
            currentDisplay.rackItem = rackItems.find(x => x.name === properties[15].replace("rackItem",""))
        };
        currentDisplay.rackItemOver = Number(properties[16]);
        currentDisplay.logo = logos.find(x => x.name === properties[17]);
        if ( properties[18] == "" ) {
            currentDisplay.background = ""
        } else {
            currentDisplay.background = backgrounds.find(x => x.name === properties[18])
        };
        ;
        currentDisplay.backgroundColour = properties[19];
        

    }


}

// function startingValueSetter() {
//     document.getElementById("primaryColourControl").value = colourReturn(currentDisplay.primaryColour);
//     document.getElementById("secondaryColourControl").value = colourReturn(currentDisplay.secondaryColour);
//     document.getElementById("wheelColourControl").value = colourReturn(currentDisplay.wheelColour);
//     document.getElementById("backgroundColourControl").value = colourReturn(currentDisplay.backgroundColour);

//     // if (currentDisplay.secondaryOption == 1) {
//     //      document.getElementById("secondaryColourChoice").checked = true
//     // } else {
//     //      document.getElementById("secondaryColourChoice").checked = false
//     // }
// //     if (currentDisplay.wheelColourMatch == 1) {
// //         document.getElementById("wheelColourMatch").checked = true
// //    } else {
// //         document.getElementById("wheelColourMatch").checked = false
// //    }

//     document.querySelector('.primaryColour').dispatchEvent(new Event('input', { bubbles: true }));
//     document.querySelector('.secondaryColour').dispatchEvent(new Event('input', { bubbles: true }));
//     document.querySelector('.wheelColour').dispatchEvent(new Event('input', { bubbles: true }));
//     document.querySelector('.backgroundColour').dispatchEvent(new Event('input', { bubbles: true }));

//     document.getElementById("primaryColourControl").style.background = colourReturn(currentDisplay.primaryColour);
//     document.getElementById("secondaryColourControl").style.background = colourReturn(currentDisplay.secondaryColour);
//     document.getElementById("wheelColourControl").style.background = colourReturn(currentDisplay.wheelColour);
//     document.getElementById("backgroundColourControl").style.background = colourReturn(currentDisplay.backgroundColour);

//     document.getElementById("primaryColourOptionDropdownButton").style.background = colourReturn(currentDisplay.primaryColour);
//     document.getElementById("secondaryColourOptionDropdownButton").style.background = colourReturn(currentDisplay.secondaryColour);
//     document.getElementById("wheelColourOptionDropdownButton").style.background = colourReturn(currentDisplay.wheelColour);
//     document.getElementById("backgroundColourOptionDropdownButton").style.background = colourReturn(currentDisplay.backgroundColour);

// }

function addToURL() {
    //this function just adds to the end of the URL

    //const url = new URL(window.location.href);
    //url.searchParams.set('param1', 'val1');
    //url.searchParams.delete('param2');
    // window.history.replaceState(null, null, encodeCurrentToURL())

}



//-----------------------------------------------
// Functions for buttons
//-----------------------------------------------


// function revealMessage() {
//     document.getElementById("hiddenMessage").style.display = 'block';
// }

function openCanvasURL( outputCanvas ) {

    pngUrl = outputCanvas.toDataURL();
    console.log(pngUrl);
    // window.open(pngUrl, '_blank');
    outputCanvas.toBlob((blob) => window.open(URL.createObjectURL(blob), '_blank'));

}

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function bodyDropdownFunction() {
//     document.getElementById("bodyDropdownList").classList.toggle("show");
// }

// function wheelDropdownFunction() {
//     document.getElementById("wheelDropdownList").classList.toggle("show");
//     // document.getElementById("wheelDropdownList8").classList.toggle("show");
//     // document.getElementById("wheelDropdownList10").classList.toggle("show");
//     // document.getElementById("wheelDropdownList12").classList.toggle("show");
// }

// function frontTyreDropdownFunction() {
//     document.getElementById("frontTyreDropdownList").classList.toggle("show");
// }
// function backTyreDropdownFunction() {
//     document.getElementById("backTyreDropdownList").classList.toggle("show");
// }

// function roofDropdownFunction() {
//     document.getElementById("roofDropdownList").classList.toggle("show");
// }

// function rackDropdownFunction() {
//     document.getElementById("rackDropdownList").classList.toggle("show");
// }

// function rackItemDropdownFunction() {
//     document.getElementById("rackItemDropdownList").classList.toggle("show");
// }

// function logoDropdownFunction() {
//     document.getElementById("logoDropdownList").classList.toggle("show");
// }

// function backgroundDropdownFunction() {
//     document.getElementById("backgroundDropdownList").classList.toggle("show");
// }

// function exportDropdownFunction() {
//     document.getElementById("exportDropdownList").classList.toggle("show");
// }

// function colourDropdownFunction(element) {
//     idToShow = element.id.replace("Button","List");
//     document.getElementById(idToShow).classList.toggle("show");
// }


// function showByElementID(elementID) {
//     if (document.getElementById(elementID).classList.contains('hide')) {
//         document.getElementById(elementID).classList.remove('hide');
//     }
// }

// function hideByElementID(elementID) {
//     if (!document.getElementById(elementID).classList.contains('hide')) {
//         document.getElementById(elementID).classList.add('hide');
//     }
// }

// function checkCheckbox() {
//     var wheelColourCheckbox = document.getElementById('wheelColourMatch');
//     if (wheelColourCheckbox.checked == true) {
//         currentDisplay.wheelColourMatch = 1
//         // drawToMainCanvas();
//     } else {
//         currentDisplay.wheelColourMatch = 0
//         // drawToMainCanvas();
//     }

//     var secondaryColourCheckbox = document.getElementById('secondaryColourChoice');
//     if (secondaryColourCheckbox.checked == true) {
//         currentDisplay.secondaryOption = 1
//         showByElementID("secondaryColourControl");
//         // drawToMainCanvas();
//     } else {
//         currentDisplay.secondaryOption = 0
//         hideByElementID("secondaryColourControl");
//         // drawToMainCanvas();
//     } 
//     drawToMainCanvas();
// }

// function checkForSecondaryColourOption() {

//     if ("imageSecondary" in currentDisplay.body) {
//         showByElementID("secondaryColourOptionDropdownButton");
//     } else {
//         hideByElementID("secondaryColourOptionDropdownButton");
//     }

// }

// function openTab(evt, tabName) {
//     // Declare all variables
//     var i, tabContent, tablinks;
  
//     // Get all elements with class="tabContent" and hide them
//     tabContent = document.getElementsByClassName("tabContent");
//     for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

// function closeDropdowns() {
//     var dropdowns = document.getElementsByClassName("dropdownContent");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//         }
//     }

// }
  
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     // checkCheckbox();

//     if (
//         !event.target.matches('.dropdownButton') 
//         && !event.target.matches('.dropdownButtonImage')  
//         && !event.target.matches('.dropdownContent')  
//         && !event.target.matches('.coloris') 
//         && !document.getElementById("clr-picker").classList.contains("clr-open") // so that if the colour picker is open, dont close a drop down
//     ) {
//         var dropdowns = document.getElementsByClassName("dropdownContent");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     } else { 
//         // alert("Button clicked, id "+event.target.id+", text"+event.target.innerHTML) 
//         var dropdowns = document.getElementsByClassName("dropdownContent");
//         var i;

//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
            
//             if (   (openDropdown.classList.contains('show')) && !(event.target.id.replace('Button','List') == openDropdown.id) ) {
//                 // this is commented out so that it doesnt close the dropdown menu when selecting an option
//                 // openDropdown.classList.remove('show');
//             }
//         }
//     };

// }

//-----------------------------------------------
// Functions for changing properties
//-----------------------------------------------

// function closeButtonHTML () {
//     return `<a onclick="closeDropdowns(this)" id=none class="dropdownButton closeButton">close</a> <p></p>`
// }

// function setupBodyOptions () {

//     var outputHTML = ``;
//     var family1Options = ``;
//     var family2Options = ``;
//     var family3Options = ``;
//     var family4Options = ``;
//     var family5Options = ``;
//     var family6Options = ``;
//     var family7Options = ``;
//     var family8Options = ``;
//     var family9Options = ``;
//     var family10Options = ``;
//     var scaleFactor = 0.5;

//     var bodiesToLoad = [];
//     var bodyData = [];
//     var bodiesCount = 0;

//     // var wheel = new Image(); 

//     for (bodyEl of bodies) {

//         bodyEl.image = new Image();
//         bodyEl.imageArchesOption = new Image();
        
//         primaryColourInput = colourReturn(currentDisplay.primaryColour);

//         // if (currentDisplay.primaryColour.includes("#")) {
//         //     primaryColourInput = currentDisplay.primaryColour;
//         // } else {
//         //     primaryColourInput = currentDisplay[currentDisplay.primaryColour];
//         // };

//         bodyEl.image.src = bodyEl.imageBody;
//         bodyEl.imageArchesOption.src = bodyEl.imageArches;

//         bodiesToLoad.push(bodyEl.image);
//         bodiesToLoad.push(bodyEl.imageArchesOption);
//         bodyData.push(bodyEl);
//     };




//     bodiesToLoad.forEach(image =>{
//         image.onload = ()=>{ 
//             bodiesCount +=1;
//             if(bodiesCount == bodiesToLoad.length){

//                 for (bodyEl of bodyData) {


//                     setupButtonCanvas = document.createElement("canvas");
//                     setupButtonContext = setupButtonCanvas.getContext("2d");

//                     setupButtonCanvas.width = scaleFactor*bodyEl.size;
//                     setupButtonCanvas.height = scaleFactor*50;


                    
//                     hiddenButtonCanvas = document.createElement("canvas");
//                     hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

//                     hiddenButtonCanvas.width = scaleFactor*bodyEl.size;
//                     hiddenButtonCanvas.height = scaleFactor*50;

        

//                     bodyEl.data = setupImageFromData(bodyEl.image,primaryColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
//                     bodyEl.dataArches = setupImageFromData(bodyEl.imageArchesOption,primaryColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
//                     //bodyEl.data = loadImageToArray(wheel, canvasWidth=128,canvasHeight=128, scaleFactor);

//                     setupButtonContext.clearRect(0,0,512,512);
//                     setupButtonContext.putImageData(bodyEl.data,0,0);
//                     hiddenButtonContext.drawImage(setupButtonCanvas,0,0);

//                     // CarPositionOver:11,
//                     // CarPositionDown:59,
//                     // SecondaryPositionOver: 50,
//                     // SecondaryPositionDown: 50,
//                     // ArchPositionOver:16,
//                     // ArchPositionDown:82,

//                     archOver = scaleFactor* (bodyEl.ArchPositionOver - bodyEl.CarPositionOver);
//                     archDown = scaleFactor* (bodyEl.ArchPositionDown - bodyEl.CarPositionDown);

//                     setupButtonContext.clearRect(0,0,512,512);
//                     setupButtonContext.putImageData(bodyEl.dataArches,0,0);
//                     hiddenButtonContext.drawImage(setupButtonCanvas,archOver,archDown);

//                     imageBase64 = hiddenButtonCanvas.toDataURL();

//                     text = (
//                         `<a onclick="bodyChange(this)" id=body` + bodyEl.name + ` class="dropdownButton">
//                         <img style='display:block; width:`+scaleFactor*bodyEl.size+`px;height:`+scaleFactor*50+`px;'
//                         src=`+imageBase64+` class="dropdownButtonImage">`
//                         +`</a>`
//                     );

//                     // outputHTML = outputHTML + text
                    
//                     if (bodyEl.family == "buggle") {
//                         family1Options = family1Options + text
//                     } 
//                     if (bodyEl.family == "keegle") {
//                         family2Options = family2Options + text
//                     } 
//                     if (bodyEl.family == "variable") {
//                         family3Options = family3Options + text
//                     }    
//                     if (bodyEl.family == "twofer") {
//                         family4Options = family4Options + text
//                     }
//                     if (bodyEl.family == "bigun") {
//                         family5Options = family5Options + text
//                     }
//                     if (bodyEl.family == "brix") {
//                         family6Options = family6Options + text
//                     }
//                     if (bodyEl.family == "653") {
//                         family7Options = family7Options + text
//                     } 
//                     if (bodyEl.family == "039") {
//                         family8Options = family8Options + text
//                     }    
//                     if (bodyEl.family == "039Tu") {
//                         family9Options = family9Options + text
//                     }     
//                     if (bodyEl.family == "005") {
//                         family10Options = family10Options + text
//                     }              
//                 };

//                 outputHTML = outputHTML + `<p></p>` + family1Options;
//                 outputHTML = outputHTML + `<p></p>` + family2Options;
//                 outputHTML = outputHTML + `<p></p>` + family3Options;
//                 outputHTML = outputHTML + `<p></p>` + family4Options;
//                 outputHTML = outputHTML + `<p></p>` + family5Options;
//                 outputHTML = outputHTML + `<p></p>` + family6Options;
//                 outputHTML = outputHTML + `<p></p>` + family7Options;
//                 outputHTML = outputHTML + `<p></p>` + family8Options;
//                 outputHTML = outputHTML + `<p></p>` + family9Options;
//                 outputHTML = outputHTML + `<p></p>` + family10Options;

//                 closeButtonText = closeButtonHTML();

//                 outputHTML = closeButtonText + outputHTML

//                 document.getElementById("bodyDropdownList").innerHTML = outputHTML;

//             };
//         };
//     });    
// };

// // function setupWheelOptions () {

// //     var outputHTML = ``;
// //     var size8Options = ``;
// //     var size10Options = ``;
// //     var size12Options = ``;
// //     var scaleFactor = 3;

// //     var wheelsToLoad = [];
// //     var wheelData = [];
// //     var wheelsCount = 0;

// //     // var wheel = new Image(); 

    

// //     for (wheelEl of wheels) {

// //         wheelEl.image = new Image();
// //         wheelEl.image.src = wheelEl.imageWheel;

// //         wheelsToLoad.push(wheelEl.image);
// //         wheelData.push(wheelEl);
// //     };




// //     wheelsToLoad.forEach(image =>{
// //         image.onload = ()=>{ 
// //             wheelsCount +=1;
// //             if(wheelsCount == wheelsToLoad.length){

// //                 for (wheelEl of wheelData) {

                    
// //                     hiddenButtonCanvas = document.createElement("canvas");
// //                     hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

// //                     hiddenButtonCanvas.width = scaleFactor*wheelEl.size;
// //                     hiddenButtonCanvas.height = scaleFactor*wheelEl.size
                            
// //                     convertedWheelColour = colourReturn(currentDisplay.wheelColour);
// //                     wheelColourInput = convertedWheelColour;

// //                     wheelEl.data = setupImageFromData(wheelEl.image,wheelColourInput,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
// //                     //wheelEl.data = loadImageToArray(wheel, canvasWidth=128,canvasHeight=128, scaleFactor);

// //                     hiddenButtonContext.clearRect(0,0,512,512);
// //                     hiddenButtonContext.putImageData(wheelEl.data,0,0);

// //                     imageBase64 = hiddenButtonCanvas.toDataURL();

// //                     text = (
// //                         `<a onclick="wheelChange(this)" id=wheel` + wheelEl.name + ` class="dropdownButton">
// //                         <img style='display:block; width:`+scaleFactor*wheelEl.size+`px;height:`+scaleFactor*wheelEl.size+`px;'
// //                         src=`+imageBase64+`>`
// //                         +`</a>`
// //                     );


// //                     if (wheelEl.size == 8) {
// //                         size8Options = size8Options + text
// //                     } 
// //                     if (wheelEl.size == 10) {
// //                         size10Options = size10Options + text
// //                     } 
// //                     if (wheelEl.size == 12) {
// //                         size12Options = size12Options + text
// //                     } 

// //                     //outputHTML = outputHTML + text
                    
// //                 };

// //                 outputHTML = outputHTML + `<p>size 8:</p>`  + size8Options;
// //                 outputHTML = outputHTML + `<p>size 10:</p>` + size10Options;
// //                 outputHTML = outputHTML + `<p>size 12:</p>` + size12Options;

// //                 outputHTML = closeButtonHTML() + outputHTML

// //                 document.getElementById("wheelDropdownList").innerHTML = outputHTML;

// //             };
// //         };
// //     });    
// // };

// // // function setupTyreOptions () {

// // //     var frontSize14Options = ``;
// // //     var frontSize16Options = ``;
// // //     var frontSize18Options = ``;
// // //     var backSize14Options = ``;
// // //     var backSize16Options = ``;
// // //     var backSize18Options = ``;
// // //     var scaleFactor = 1;

// // //     var tyresToLoad = [];
// // //     var tyreData = [];
// // //     var tyresCount = 0;

// // //     // var tyre = new Image(); 

// // //     for (tyreEl of tyres) {

// // //         tyreEl.image = new Image();

        
// // //         tyreEl.image.src = tyreEl.imageTyre;

// // //         tyresToLoad.push(tyreEl.image);
// // //         tyreData.push(tyreEl);
// // //     };

// // //     tyresToLoad.forEach(image =>{
// // //         image.onload = ()=>{ 
// // //             tyresCount +=1;
// // //             if(tyresCount == tyresToLoad.length){

// // //                 for (tyreEl of tyreData) {

                    
// // //                     hiddenButtonCanvas = document.createElement("canvas");
// // //                     hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

// // //                     hiddenButtonCanvas.width = scaleFactor*tyreEl.size;
// // //                     hiddenButtonCanvas.height = scaleFactor*tyreEl.size

        
// // //                     tyreEl.data = setupImageFromData(tyreEl.image,'blank',currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
// // //                     //tyreEl.data = loadImageToArray(tyre, canvasWidth=128,canvasHeight=128, scaleFactor);

// // //                     hiddenButtonContext.clearRect(0,0,512,512);
// // //                     hiddenButtonContext.putImageData(tyreEl.data,0,0);

// // //                     imageBase64 = hiddenButtonCanvas.toDataURL();

// // //                     frontText = (
// // //                         `<a onclick="tyreChange(this)" id=front` + tyreEl.name + ` class="dropdownButton">
// // //                         <img style='display:block; width:`+scaleFactor*tyreEl.size+`px;height:`+scaleFactor*tyreEl.size+`px;'
// // //                         src=`+imageBase64+`>`
// // //                         +`</a>`
// // //                     );

// // //                     backText = (
// // //                         `<a onclick="tyreChange(this)" id=back` + tyreEl.name + ` class="dropdownButton">
// // //                         <img style='display:block; width:`+scaleFactor*tyreEl.size+`px;height:`+scaleFactor*tyreEl.size+`px;'
// // //                         src=`+imageBase64+`>`
// // //                         +`</a>`
// // //                     );


// // //                     if (tyreEl.size == 14) {
// // //                         frontSize14Options  = frontSize14Options + frontText
// // //                         backSize14Options   = backSize14Options + backText
// // //                     } 
// // //                     if (tyreEl.size == 16) {
// // //                         frontSize16Options  = frontSize16Options + frontText
// // //                         backSize16Options   = backSize16Options + backText
// // //                     } 
// // //                     if (tyreEl.size == 18) {
// // //                         frontSize18Options  = frontSize18Options + frontText
// // //                         backSize18Options   = backSize18Options + backText
// // //                     } 

// // //                     //outputHTML = outputHTML + text
                    
// // //                 };

// // //                 outputHTML = (
// // //                      `<p> front </p>` + `<p> size 14 </p>`  + frontSize14Options + `<p> size 16 </p>`  + frontSize16Options + `<p> size 18 </p>`  +  frontSize18Options 
// // //                     + `<p> back </p>` + `<p> size 14 </p>`  +  backSize14Options + `<p> size 16 </p>`  +  backSize16Options + `<p> size 18 </p>` + backSize18Options
// // //                 );

// // //                 frontHTML   = ( `<p> size 14 </p>`  + frontSize14Options + `<p> size 16 </p>`  + frontSize16Options + `<p> size 18 </p>`  + frontSize18Options );
// // //                 backHTML    = ( `<p> size 14 </p>`  +  backSize14Options + `<p> size 16 </p>`  +  backSize16Options + `<p> size 18 </p>`  + backSize18Options);

// // //                 frontHTML = closeButtonHTML() + frontHTML;
// // //                 backHTML = closeButtonHTML() + backHTML;

// // //                 // document.getElementById("tyreDropdownList").innerHTML = outputHTML;
// // //                 document.getElementById("frontTyreDropdownList").innerHTML = frontHTML;
// // //                 document.getElementById("backTyreDropdownList").innerHTML = backHTML;

// // //             };
// // //         };
// // //     });    
// // // };

// function setupGeneralOptions ( itemList , elementIDChangeStr, scaleFactor, fucntionChangeStr , idPrefix, allowNoneBool, colourConvert) {

//     // always has a none option
//     var outputHTML =  ``;

//     if (allowNoneBool) {
//         outputHTML = outputHTML + `<a onclick="`+fucntionChangeStr+`(this)" id=none class="dropdownButton">none</a> `;
//     }

//     var imagesToLoad = [];
//     var imagesData = [];
//     var imagesCount = 0;

//     colourConvert = colourReturn(colourConvert);


//     // if (colourConvert.includes("#")) {
//     //     colourConvert = colourConvert;
//     // } else {
//     //     colourConvert = currentDisplay[colourConvert];
//     // };

//     // var tyre = new Image(); 

//     for (itemEl of itemList) {

//         itemEl.imageLoading = new Image();
        
        
//         itemEl.imageLoading.src = itemEl.image;

//         imagesToLoad.push(itemEl.imageLoading);
//         imagesData.push(itemEl);
//     };

//     // added in so that if no images, we do actually make some changes to the button contents
//     if(imagesToLoad.length == 0){
//         outputHTML = closeButtonHTML() + outputHTML;

//         // document.getElementById("tyreDropdownList").innerHTML = outputHTML;
//         document.getElementById( elementIDChangeStr ).innerHTML = outputHTML;
//     }

//     imagesToLoad.forEach(image =>{
//         image.onload = ()=>{ 
//             imagesCount +=1;
//             if(imagesCount == imagesToLoad.length){

//                 for (itemEl of imagesData) {

                    
//                     hiddenButtonCanvas = document.createElement("canvas");
//                     hiddenButtonContext = hiddenButtonCanvas.getContext("2d");

//                     hiddenButtonCanvas.width = scaleFactor*itemEl.width;   // need to sort
//                     hiddenButtonCanvas.height = scaleFactor*itemEl.height


//                     itemEl.data = setupImageFromData(itemEl.imageLoading,colourConvert,currentDisplay.lightColour,currentDisplay.darkColour, scaleFactor);
//                     //itemEl.data = loadImageToArray(tyre, canvasWidth=128,canvasHeight=128, scaleFactor);

//                     hiddenButtonContext.clearRect(0,0,hiddenButtonCanvas.width,hiddenButtonCanvas.height);
//                     hiddenButtonContext.putImageData(itemEl.data,0,0);

//                     imageBase64 = hiddenButtonCanvas.toDataURL();

//                     text = (
//                         `<a onclick="`+fucntionChangeStr+`(this)" id=` + idPrefix + itemEl.name + ` class="dropdownButton">
//                         <img style='display:block; width:`+hiddenButtonCanvas.width+`px;height:`+hiddenButtonCanvas.height+`px;'
//                         src=`+imageBase64+`>`
//                         +`</a>`
//                     );

//                     outputHTML = outputHTML + text;
                    
//                 };

//                 outputHTML = closeButtonHTML() + outputHTML;

//                 // document.getElementById("tyreDropdownList").innerHTML = outputHTML;
//                 document.getElementById( elementIDChangeStr ).innerHTML = outputHTML;

//             };
//         };
//     });    
// };

// function setupColourOptions(ElementID) {

//     var outputHTML=``

//     var customColourHTML=
//         `<div id="`+ElementID+`Option" class="colourOptions full">
//             <input id="`+ElementID+`Control" type="button" class="coloris `+ElementID+`" value="custom colour">
//         </div>  `  

//     var otherColoursHTML = ``;
//     // var otherColourList = [ "primaryColour", "secondaryColour", "wheelColour" ];

//     for (otherColour of otherColourList) {

//         if (ElementID != otherColour) {
//             buttonHTML = `<a onclick="colourChange(this)" id=`
//                 +ElementID+`|`+ otherColour +` class="dropdownButton" style="background-color: `
//                 +colourReturn(currentDisplay[otherColour])+`; color: #ffffff">`+otherColour+`</a>`;
            
//             otherColoursHTML = otherColoursHTML + buttonHTML;
//         }
//     }

//     var colourListHTML=``
//     // this loops through all the colour options and adds them in
//     if (ElementID == "backgroundColour") {
//         colourList = backgroundColours;
//     } else {
//         colourList = allColours;
//     }

//     const iterator = colourList.keys();

//     for (const key of iterator){

//         buttonHTML = `<a onclick="colourChange(this)" id=`+ElementID+`|`
//             + colourList[key][0] + ` class="dropdownButton" style="background-color: `
//             + colourList[key][1] + `; color: `
//             + colourList[key][3] + `">`
//             + colourList[key][0] + `</a>`;

//             colourListHTML = colourListHTML + buttonHTML;

//     };

//     outputHTML = closeButtonHTML() + `<p> custom colour </p>`+ customColourHTML ;
//     if (ElementID != "backgroundColour") {
//         outputHTML = outputHTML + `<p> match other colours </p>`+ otherColoursHTML  ;
//     }
//     outputHTML = outputHTML + `<p> colours </p>`  +colourListHTML;

//     document.getElementById( ElementID + "OptionDropdownList" ).innerHTML = outputHTML;



// }


// function bodyChange(element) {
//     currentDisplay.body = bodies.find(x => x.name === (element.id).replace("body",""));
//     checkForSecondaryColourOption();
//     setupGeneralOptions ( currentDisplay.body.RackOptions , "rackDropdownList" ,  3, "rackChange" , "rack", true, 'blank');
//     setupGeneralOptions ( currentDisplay.body.RoofOptions , "roofDropdownList" ,  3, "roofChange" , "roof", true, colourReturn(currentDisplay.secondaryColour));
//     // setupRackOptions ();

//     drawToMainCanvas();
// }

// function bodyHeightChange(element) {
//     if (element.id == "heightUp" ) {currentDisplay.bodyDrop--};
//     if (element.id == "heightDown" ) {currentDisplay.bodyDrop++};
//     drawToMainCanvas();
// }

// function rackPosChange(element) {
//     if (element.id == "itemLeft10" ) {currentDisplay.rackOver = currentDisplay.rackOver - 10};
//     if (element.id == "itemLeft" ) {currentDisplay.rackOver--};
//     if (element.id == "itemCentre" ) {currentDisplay.rackOver = 0};
//     if (element.id == "itemRight" ) {currentDisplay.rackOver++};
//     if (element.id == "itemRight10" ) {currentDisplay.rackOver = currentDisplay.rackOver + 10};
//     drawToMainCanvas();
// }

// function rackItemPosChange(element) {
//     if (element.id == "itemLeft10" ) {currentDisplay.rackItemOver = currentDisplay.rackItemOver - 10};
//     if (element.id == "itemLeft" ) {currentDisplay.rackItemOver--};
//     if (element.id == "itemCentre" ) {currentDisplay.rackItemOver = 0};
//     if (element.id == "itemRight" ) {currentDisplay.rackItemOver++};
//     if (element.id == "itemRight10" ) {currentDisplay.rackItemOver = currentDisplay.rackItemOver + 10};
//     drawToMainCanvas();
// }

// function wheelChange(element) {
//     currentDisplay.wheels = wheels.find(x => x.name === (element.id).replace("wheel",""));
//     drawToMainCanvas();
// }

// function tyreChange(element) {
//     if (element.id == "front14Normal" ) {currentDisplay.frontTyre = tyre14Normal};
//     if (element.id == "front16Normal" ) {currentDisplay.frontTyre = tyre16Normal};
//     if (element.id == "front18Normal" ) {currentDisplay.frontTyre = tyre18Normal};
//     if (element.id == "back14Normal" ) {currentDisplay.backTyre = tyre14Normal};
//     if (element.id == "back16Normal" ) {currentDisplay.backTyre = tyre16Normal};
//     if (element.id == "back18Normal" ) {currentDisplay.backTyre = tyre18Normal};

//     if (element.id == "front14White" ) {currentDisplay.frontTyre = tyre14White};
//     if (element.id == "front16White" ) {currentDisplay.frontTyre = tyre16White};
//     if (element.id == "front18White" ) {currentDisplay.frontTyre = tyre18White};
//     if (element.id == "back14White" ) {currentDisplay.backTyre = tyre14White};
//     if (element.id == "back16White" ) {currentDisplay.backTyre = tyre16White};
//     if (element.id == "back18White" ) {currentDisplay.backTyre = tyre18White};
//     drawToMainCanvas();
// }

// function roofChange(element) {
//     if (element.id == "none" ) {
//         currentDisplay.roof = '';
//     } else {
//         currentDisplay.roof = roofs.find(x => x.name === (element.id).replace("roof",""));
//     }
//     drawToMainCanvas();
// }

// function rackChange(element) {
//     if (element.id == "none" ) {
//         currentDisplay.rack = '';
//         hideByElementID("rackItemDropdownButton");
//     } else {
//         currentDisplay.rack = racks.find(x => x.name === (element.id).replace("rack",""));
//         showByElementID("rackItemDropdownButton");
//     }
//     drawToMainCanvas();
// }

// function rackItemChange(element) {
//     if (element.id == "none" ) {
//         currentDisplay.rackItem = '';
//     } else {
//         currentDisplay.rackItem = rackItems.find(x => x.name === (element.id).replace("rackItem",""));
//     }
//     drawToMainCanvas();
// }

// function logoChange(element) {
//     currentDisplay.logo = logos.find(x => x.name === (element.id).replace("Button",""));
//     drawToMainCanvas();
// }

// function backgroundChange(element) {
//     if (element.id == "none" ) {
//         currentDisplay.background = '';
//     } else {
//         currentDisplay.background = backgrounds.find(x => x.name === (element.id).replace("Button",""));
//     }
//     drawToMainCanvas();
// }

// function colourChange(element) {
//     idSplit = (element.id).split("|");
//     partName = idSplit[0];
//     colourName = idSplit[1];

//     if (partName == "backgroundColour") {
//         colourList = backgroundColours;
//     } else {
//         colourList = allColours;
//     }

//     // set this for saftey incase it's broke
//     colourHex = currentDisplay.primaryColour;

//     colourHex = "not in list";
//     // find where that name is in colour list
//     const iterator = colourList.keys();
//     for (const key of iterator){
//         if (colourList[key][0] == colourName) {
//             colourHex = colourList[key][1];
//         }
//     }

//     if (colourHex == "not in list"){
//         //then we are setting it to another colour
//         colourHex = currentDisplay[colourName];
//         if ( !(currentDisplay[colourName].includes("#")) ) {
//             // if no hash, then this other colour is also a pointer, so just use it's value
//             currentDisplay[partName] = currentDisplay[currentDisplay[colourName]];
//         } else {
//             currentDisplay[partName] = colourName;
//         }
//     } else {
//         currentDisplay[partName] = colourHex;   
//     }

    
//     // do all drawing that may be needed for a colour change
//     setupBodyOptions();
//     setupGeneralOptions ( logos , "logoDropdownList" , 2, "logoChange" , "", false, colourReturn(currentDisplay.primaryColour) );
//     setupWheelOptions();
//     drawToMainCanvas();


//     // document.getElementById(partName + "Control").value = colourHex;
//     // document.getElementById(partName + "Control").style.background = colourHex;
//     // document.getElementById(partName + "OptionDropdownButton").style.background = colourHex;

    
//     // for (otherColour of otherColourList) {
//     //     if (partName != otherColour) {
//     //         document.getElementById( otherColour+"|"+ partName  ).style.background = colourHex;
//     //     }
//     // }

//     document.getElementById(partName + "Control").value = colourHex;
//     document.getElementById(partName + "Control").style.background = colourHex;
//     document.getElementById(partName + "OptionDropdownButton").style.background = colourHex;

//     // loop through the other buttons, if they are set to this, then change those too
//     if (partName != "backgroundColour") {
//         for (otherColour of otherColourList) {

//             if (partName != otherColour) {
//                 document.getElementById( otherColour+"|"+ partName  ).style.background = colourHex;
//             }

//             if ( currentDisplay[otherColour] == partName ) {
//                 document.getElementById(otherColour + "Control").value = colourHex;
//                 document.getElementById(otherColour + "Control").style.background = colourHex;
//                 document.getElementById(otherColour + "OptionDropdownButton").style.background = colourHex;

//                 for (menuColour of otherColourList) {
//                     if (menuColour != otherColour) {
//                         document.getElementById( menuColour +"|"+ otherColour  ).style.background = colourHex;
//                     }
//                 }

//             }

//         }
//     }
    

// }
function colourReturn(currentColour) {

    if (currentColour.includes("#")) {
        output = currentColour;
    } else {
        output = currentDisplay[currentColour];
    };

    return output;
}

async function exportImage(element) {

    idSplit = (element).split("|");

    scaleFactor = idSplit[0]*1;
    shape = idSplit[1];
    format = idSplit[2];

    canvasToExport = await drawToTempCanvas(scaleFactor, shape, format );

    console.log(canvasToExport);
    openCanvasURL(canvasToExport);
    
    return canvasToExport.toDataURL();
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

function loadImageToArray(imageIn,canvasWidth,canvasHeight,scaleFactor) {

    const hiddenCanvas = document.createElement("canvas");

    hiddenCanvas.width = canvasWidth*scaleFactor; 
    hiddenCanvas.height = canvasHeight*scaleFactor;

    hiddenContext = hiddenCanvas.getContext("2d");

    // const hiddenCanvas = document.getElementById("hiddenCanvas").getContext("2d");

    hiddenContext.clearRect(0,0,canvasWidth*scaleFactor,canvasHeight*scaleFactor);

    width = imageIn.width;
    height = imageIn.height;

    hiddenContext.imageSmoothingEnabled = false;
    hiddenContext.drawImage(imageIn,0,0,scaleFactor*width,scaleFactor*height);
    var imageData = hiddenContext.getImageData(0,0,canvasWidth*scaleFactor,canvasHeight*scaleFactor);
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

function setupImageFromData(imageName,colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank',scaleFactor, numberOfPixels = drawingPixels) {
    
    imageName.data = loadImageToArray(imageName, numberOfPixels, numberOfPixels, scaleFactor);

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
    imageName,x,y,hiddenCanvas,visibleContext,
    colourConvertTo='blank',highlightRatio='blank',lowlightRatio='blank'
    ) {

        if (imageName instanceof HTMLImageElement) {
            scaleFactor = hiddenCanvas.width / drawingPixels;
            numberOfPixels = drawingPixels;
        } else {
            scaleFactor = 1;
            numberOfPixels = Math.min(hiddenCanvas.width, hiddenCanvas.height);
        }
        

        imageName.data = setupImageFromData(imageName,colourConvertTo,highlightRatio,lowlightRatio, scaleFactor, numberOfPixels);
    
        hiddenContext = hiddenCanvas.getContext("2d");

        hiddenContext.clearRect(0,0,hiddenCanvas.width,hiddenCanvas.height);
        hiddenContext.putImageData(imageName.data,0,0);
        visibleContext.imageSmoothingEnabled = false;
        visibleContext.drawImage(hiddenCanvas,x*scaleFactor,y*scaleFactor);

}

function draw( drawToCanvas , format = "none") {

    return new Promise((resolve) => {

        console.log("in draw promise");

        const floorline = 85;
        // const drawToCanvas = document.getElementById("mainCanvas")
        const visibleContext = drawToCanvas.getContext("2d");

        const hiddenCanvas = createCanvas(200, 200);  //= document.createElement("canvas");
        hiddenCanvas.width = drawToCanvas.width; 
        hiddenCanvas.height = drawToCanvas.height;

        // const hiddenCanvas = document.getElementById("hiddenCanvas");
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
        const roof = new Image();
        const rack = new Image();
        const rackItem = new Image();
        const logoImage = new Image();
        const backgroundImage = new Image();

        // const circle = new Image();

        var imagesToLoad = [];
        var imageCount = 0;

        var roofCheck = ( currentDisplay.roof != "" && currentDisplay.body.RoofOptions.includes(currentDisplay.roof));
        var rackCheck = ( currentDisplay.rack != "" && currentDisplay.body.RackOptions.includes(currentDisplay.rack));
        var rackItemCheck = ( currentDisplay.rackItem != ""  && rackCheck);
        var backgroundCheck = ( currentDisplay.background != "" );


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

        // circle.src = drawCircle( 5 );
        // imagesToLoad.push(circle);
        
        // logoImage.src = logo.imageLogoWhtPlate;
        logoImage.src =  currentDisplay.logo.image;
        imagesToLoad.push(logoImage);

        if ( "imageSecondary" in currentDisplay.body ) {
            secondary.src = currentDisplay.body.imageSecondary
            imagesToLoad.push(secondary);
        };

        if ( roofCheck ) {
            roof.src =  currentDisplay.roof.image
            imagesToLoad.push(roof);
        };

        if ( rackCheck ) {
            rack.src =  currentDisplay.rack.image
            imagesToLoad.push(rack);
        };
        if ( rackItemCheck ) {
            rackItem.src =  currentDisplay.rackItem.image
            imagesToLoad.push(rackItem);
        };

        if (backgroundCheck) {
            backgroundImage.src =  currentDisplay.background.image;
            imagesToLoad.push(backgroundImage);
        }

        

        // colour matching system
        convertedPrimaryColour = colourReturn(currentDisplay.primaryColour);
        convertedSecondaryColour = colourReturn(currentDisplay.secondaryColour);
        convertedWheelColour = colourReturn(currentDisplay.wheelColour);

        // if (currentDisplay.wheelColour.includes("#")) {
        //     convertedWheelColour = currentDisplay.wheelColour;
        // } else {
        //     convertedWheelColour = currentDisplay[currentDisplay.wheelColour];
        // };

        // if (currentDisplay.secondaryColour.includes("#")) {
        //     convertedSecondaryColour = currentDisplay.secondaryColour;
        // } else {
        //     convertedSecondaryColour = currentDisplay[currentDisplay.secondaryColour];
        // };

        // if (currentDisplay.primaryColour.includes("#")) {
        //     convertedPrimaryColour = currentDisplay.primaryColour;
        // } else {
        //     convertedPrimaryColour = currentDisplay[currentDisplay.primaryColour];
        // };






        if (currentDisplay.wheels.customColour == 1) {
            // showByElementID("wheelColourOptionDropdownButton");

            // if (currentDisplay.wheelColourMatch == 0) {
            //     showByElementID("wheelColourControl");
            //     wheelColourInput = convertedWheelColour
            // } else {
            //     hideByElementID("wheelColourControl");
            //     wheelColourInput = currentDisplay.primaryColour;
            // }
            
            wheelColourInput = convertedWheelColour

        } else {
            wheelColourInput = 'blank'
            // hideByElementID("wheelColourOptionDropdownButton");
        }


        addToURL();

        console.log("about to load images")
        
        imagesToLoad.forEach(image =>{
            image.onload = ()=>{ 
                imageCount +=1;
                console.log("loaded images")
                if(imageCount == imagesToLoad.length){

                    visibleContext.clearRect(0,0,drawToCanvas.width,drawToCanvas.height);
                    visibleContext.imageSmoothingEnabled = false;

                    if ( !( format.includes( "no_background" ) ) ) {
                        if ( backgroundCheck ) {
                            if ( currentDisplay.background.name == 'backgroundCircle' && drawToCanvas != document.getElementById("mainCanvas") ){

                                circleSize = Math.min(hiddenCanvas.width, hiddenCanvas.height);
                                circlecanvas = drawCircle( circleSize );

                                drawImageFromData( circlecanvas ,
                                    0,
                                    0,
                                    hiddenCanvas,
                                    visibleContext,
                                    'blank',
                                    'blank',
                                    'blank'
                                );

                            } else {
                                drawImageFromData(backgroundImage,
                                    0,
                                    0,
                                    hiddenCanvas,
                                    visibleContext,
                                    currentDisplay.backgroundColour,
                                    currentDisplay.lightColour,
                                    currentDisplay.darkColour
                                );
                            }
                        }
                    };

                    drawImageFromData(arches,
                        currentDisplay.body.ArchPositionOver,
                        currentDisplay.body.ArchPositionDown+currentDisplay.bodyDrop,
                        hiddenCanvas,
                        visibleContext
                    );

                    drawImageFromData(frontTyre,
                        currentDisplay.body.FrontWheelOver - currentDisplay.frontTyre.size/2,
                        floorline - currentDisplay.frontTyre.size,
                        hiddenCanvas,
                        visibleContext
                    );

                    drawImageFromData(backTyre,
                        currentDisplay.body.BackWheelOver - currentDisplay.backTyre.size/2 ,
                        floorline - currentDisplay.backTyre.size,
                        hiddenCanvas,
                        visibleContext
                    ); 
                    
                    drawImageFromData(frontWheel,
                        currentDisplay.body.FrontWheelOver - currentDisplay.wheels.size/2,
                        floorline - currentDisplay.wheels.size - (currentDisplay.frontTyre.size - currentDisplay.wheels.size)/2,
                        hiddenCanvas,
                        visibleContext,
                        wheelColourInput,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    );

                    drawImageFromData(backWheel,
                        currentDisplay.body.BackWheelOver - currentDisplay.wheels.size/2 ,
                        floorline - currentDisplay.wheels.size - (currentDisplay.backTyre.size - currentDisplay.wheels.size)/2,
                        hiddenCanvas,
                        visibleContext,
                        wheelColourInput,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    );  

                    drawImageFromData(body,
                        currentDisplay.body.CarPositionOver,
                        currentDisplay.body.CarPositionDown+currentDisplay.bodyDrop,
                        hiddenCanvas,
                        visibleContext,
                        convertedPrimaryColour,
                        currentDisplay.lightColour,
                        currentDisplay.darkColour
                    );
                    
                    if ( "imageSecondary" in currentDisplay.body) {  //currentDisplay.secondaryOption &&
                        drawImageFromData(secondary,
                            currentDisplay.body.SecondaryPositionOver,
                            currentDisplay.body.SecondaryPositionDown+currentDisplay.bodyDrop,
                            hiddenCanvas,
                            visibleContext,
                            convertedSecondaryColour,
                            currentDisplay.lightColour,
                            currentDisplay.darkColour
                        );                    
                    };

                    if ( roofCheck ) {
                        drawImageFromData(roof,
                            currentDisplay.body.RoofRefOver + currentDisplay.roof.overAddition,
                            currentDisplay.body.RoofRefDown + currentDisplay.bodyDrop + currentDisplay.roof.downAddition,
                            hiddenCanvas,
                            visibleContext,
                            convertedSecondaryColour,
                            currentDisplay.lightColour,
                            currentDisplay.darkColour
                        );  
                    };

                    if ( rackItemCheck ) {
                        drawImageFromData(rackItem,
                            currentDisplay.body.RoofRefOver + currentDisplay.rackItem.overAddition + currentDisplay.rackItemOver + currentDisplay.rackOver,
                            currentDisplay.body.RoofRefDown + currentDisplay.bodyDrop + currentDisplay.rackItem.downAddition,
                            hiddenCanvas,
                            visibleContext,
                            wheelColourInput,
                            currentDisplay.lightColour,
                            currentDisplay.darkColour
                        );  
                    };

                    if ( rackCheck ) {
                        drawImageFromData(rack,
                            currentDisplay.body.RoofRefOver + currentDisplay.rackOver,
                            currentDisplay.body.RoofRefDown+currentDisplay.bodyDrop,
                            hiddenCanvas,
                            visibleContext,
                            wheelColourInput,
                            currentDisplay.lightColour,
                            currentDisplay.darkColour
                        ); 
                    };

                    if ( !( format.includes( "no_logo" ) ) ) {
                        drawImageFromData(logoImage,
                            currentDisplay.logo.positionOver,
                            90,
                            hiddenCanvas,
                            visibleContext,
                            convertedPrimaryColour,
                            currentDisplay.lightColour,
                            currentDisplay.darkColour
                        );
                    }
                    console.log("about to resolve");

                    resolve("completed drawing");

                }
            }



        })
        // console.log("from draw...");
        // console.log(visibleContext);

        
    });


    
}

function drawCircle( diameter ) {

    // diameter = 128;

    const r = diameter/2;
    const circleCanvas = document.createElement("canvas");
    circleCanvas.width = diameter;
    circleCanvas.height = diameter;
    circleContext = circleCanvas.getContext("2d");

    // set colour
    circleContext.fillStyle = currentDisplay.backgroundColour ;

    // centre compared to the grid:
    
    if ( diameter % 2) {
        // if odd
        modifier = 0;
    } else {
        // if even
        modifier = 0.5;
    }

    // loop through each pixel in a quadrant
    for (let x = 0; x < r+0; x++) {
        for (let y = 0; y < r+0; y++) {
            // if position is below certain radius from center, then draw it
            // -0.5 as pixel
            if ( ( x+modifier )*( x+modifier ) 
                    + ( y+modifier )*( y+modifier )
                    <= (r)*(r) ) {
                // fill quadrants in clockwise fashion, starting bottom right
                circleContext.fillRect( r+(x+0.5-modifier),                 r+(y+0.5-modifier),                 1, 1 );   // bottom right
                circleContext.fillRect( r-(x+0.5-modifier+(2*modifier)),    r+(y+0.5-modifier),                 1, 1 );  // bottom left
                circleContext.fillRect( r-(x+0.5-modifier+(2*modifier)),    r-(y+0.5-modifier+(2*modifier)),    1, 1 ); // top left
                circleContext.fillRect( r+(x+0.5-modifier),                 r-(y+0.5-modifier+(2*modifier)),    1, 1 ); // top right
            }
        }
    }

    // circleContext.beginPath();
    // circleContext.arc(r, r, r, 0, 2 * Math.PI);
    // circleContext.fill();


    return circleCanvas
}

function drawToMainCanvas() {

    draw( document.getElementById("mainCanvas") );
    // draw( document.getElementById("outputCanvas") );

}

async function drawToTempCanvas( scaleFactor, shape, format ) {

    chestWidth = 4;
    chestHeight = 2;

    // const visibleCanvas = document.getElementById("mainCanvas")

    // const squareCanvas = document.getElementById("squareCanvas");
    // const squareCanvas = document.createElement("canvas");
    const squareCanvas = createCanvas(200, 200);
    squareCanvas.width = scaleFactor*drawingPixels; 
    squareCanvas.height = scaleFactor*drawingPixels;

    outputContext = squareCanvas.getContext("2d");

    console.log("in draw temp to canvas");
    const message = await draw( squareCanvas , format );

    if (shape == "square") {
        outputCanvas = squareCanvas;

    } else if (shape == "chest") {
        //do stuff
        // const wideCanvas = document.createElement("canvas");
        const wideCanvas = createCanvas(200, 200);

        wideCanvas.width = scaleFactor*drawingPixels*chestWidth; 
        wideCanvas.height = scaleFactor*drawingPixels*chestHeight;

        xPos = (chestWidth-1) * scaleFactor * drawingPixels;
        yPos = (chestHeight-1) * scaleFactor * drawingPixels;
        wideContext = wideCanvas.getContext("2d");

        wideContext.drawImage(squareCanvas, xPos, yPos, scaleFactor*drawingPixels, scaleFactor*drawingPixels);

        outputCanvas = wideCanvas;

    };

    return outputCanvas;

}

//-----------------------------------------------
// Functions for shop
//-----------------------------------------------

// async function teemillShopAPI() {

//     // const visibleCanvas = document.getElementById("mainCanvas")
    
//     const canvasToExport = await drawToTempCanvas(8, "chest" );

//     // Export the base64 image from the canvas
//     const base64_image = canvasToExport.toDataURL();
    
//     // Set the API key - the line below will be prefilled with your unique key
//     const apiKey = 'UUVJeABlhj7R6nkdMbuA1Sq2fk58s6dGgkkDo0Lz'; 

//     // Set the fields to submit. image_url is the only required field for the API request. If you want, you can set the product name, description and price. You can also change the product type and colours using item_code and colours. To find an up-to-date list of available options for these fields, visit this endpoint: https://teemill.com/omnis/v3/product/options/
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer UUVJeABlhj7R6nkdMbuA1Sq2fk58s6dGgkkDo0Lz`,
//         },
//         body: JSON.stringify({
//             image_url: base64_image,
//             // back_image_url: base64_image,
//             item_code: "RNA1",
//             name: "Pixel Cooled Classic Tee",
//             colours: "White,Athletic Grey,Navy Blue,Black,Mustard,Red,Dark Grey,Bright Blue",
//             description: "You are buying a custom design, created by yourself. Due to this, refunds are not available. If you would like to sample the size before buying, please test with a blank item from rapanuiclothing.com",
//             price: 25.00,
//             cross_sell: true
//         }),
//     };

//     // Open a new tab, ready to receive the product URL
//     var newTab = window.open('loading pixel product', '_blank');
//     newTab.document.write(
//         "<body style='background-color:#faf9f9;width:100%;height:100%;margin:0;position:relative;'><img src='https://storage.googleapis.com/teemill-dev-image-bucket/what3words_loader.gif' style='position:absolute;top:calc(50% - 100px);left:calc(50% - 100px);'/></body>"
//     );

//     // Send the API request, and redirect the new tab to the URL that is returned
//     fetch('https://teemill.com/omnis/v3/product/create', options)
//     .then(response => response.json())
//     .then(response => newTab.location.href = response.url)
//     .catch(err => console.error(err));

// }


//-----------------------------------------------
// Run on open
//-----------------------------------------------

// window.addEventListener("load", ()=>{
//     openTab(event, 'body')
//     pickoutFromURL();
//     startingValueSetter();
//     checkForSecondaryColourOption();
//     // setupRackOptions ();
//     setupBodyOptions();
//     setupWheelOptions ();
//     setupTyreOptions ();
//     setupGeneralOptions ( logos , "logoDropdownList" , 2, "logoChange" , "", false, colourReturn(currentDisplay.primaryColour) );
//     setupGeneralOptions ( backgrounds , "backgroundDropdownList" , 0.3, "backgroundChange" , "", true, colourReturn(currentDisplay.backgroundColour) );
//     setupGeneralOptions ( currentDisplay.body.RoofOptions , "roofDropdownList" ,  3, "roofChange" , "roof", true, colourReturn(currentDisplay.secondaryColour));
//     setupGeneralOptions ( currentDisplay.body.RackOptions , "rackDropdownList" ,  3, "rackChange" , "rack", true, 'blank');
//     setupGeneralOptions ( rackItems , "rackItemDropdownList" ,  2, "rackItemChange" , "rackItem", true, 'blank');
//     setupColourOptions("primaryColour");
//     setupColourOptions("secondaryColour");
//     setupColourOptions("wheelColour");
//     setupColourOptions("backgroundColour");

//     //rerun, test removing first set
//     startingValueSetter();

//     // checkCheckbox();
//     drawToMainCanvas();
//     console.log("running opener");
    

// });





exports.imageSender = async function () {

    let outputImage = await exportImage("4|square");
    console.log("after await");

    outputImage.then(function(result) {
        console.log(result);
        return (  result  ) ;
    })

    // console.log(outputImage);

    // return (  outputImage  ) ;
};
