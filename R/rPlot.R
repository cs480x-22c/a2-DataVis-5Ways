library(ggplot2)
library(hrbrthemes)
csv_data<-read.csv("~/Downloads/Visualization/a2-DataVis-5Ways/cars-sample.csv")
ggplot(csv_data, aes(x=Weight, y=MPG, color=Manufacturer, size=Weight)) +
  geom_point(alpha=.5) 

