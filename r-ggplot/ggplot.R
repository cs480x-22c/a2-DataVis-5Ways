library(ggplot2)

data = read.csv("../cars-sample.csv")
ggplot(data, aes(x=Weight, y=MPG, colour=Manufacturer, size=Weight)) + geom_point(alpha = 0.5)
