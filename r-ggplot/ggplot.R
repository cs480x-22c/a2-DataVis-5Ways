library(ggplot2)

#need to set working directory to location of this file or it won't work
data = read.csv("../cars-sample.csv")
ggplot(data, aes(x=Weight, y=MPG, colour=Manufacturer, size=Weight)) + geom_point(alpha = 0.5)
