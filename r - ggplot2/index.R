library(tidyverse)
library(ggplot2)

car_data <- read.csv('cars-sample.csv')
head(car_data)
ggplot(car_data) + geom_point(aes(x=Weight, y=MPG, color=Manufacturer, size=Weight, alpha=0.5))

       