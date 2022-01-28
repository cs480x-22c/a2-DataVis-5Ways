library(tidyverse)
mtcars_sample <- read.csv("cars-sample.csv", header=TRUE)
ggplot(mtcars_sample, aes(x=Weight, y=MPG)) +
  geom_point(aes(alpha=0.5, colour=Manufacturer, size=Weight))