library("ggplot2")
data = read.csv("https://raw.githubusercontent.com/hyoder/a2-DataVis-5Ways/main/cars-sample.csv")
ggplot(data, aes(x = Weight, y = MPG, color = Manufacturer, size = Weight / 600)) + geom_point(alpha = 0.5)
