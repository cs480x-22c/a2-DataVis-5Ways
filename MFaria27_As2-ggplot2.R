library(ggplot2)
setwd("C:/Users/Mattheus Faria/Desktop/R Data")
getwd()

carData <- read.csv("cars-sample.csv", header=TRUE)

ggplot(carData, aes(x=Weight, y=MPG, color=Manufacturer)) + 
  geom_point(aes(size=Weight, alpha=0.5))