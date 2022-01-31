library(ggplot2)

data<-read.csv("https://raw.githubusercontent.com/lilygarfinkel/a2-DataVis-5Ways/main/cars-sample.csv")

data["Weight"][data["Weight"] == x]<-x/1000

ggplot(data, aes(x=Weight, y=MPG, size=Weight, color=Manufacturer, alpha=0.5)) + geom_point()

