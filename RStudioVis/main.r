
#install.packages("tidyverse")
#install.packages("ggplot2")
library(tidyverse)
library(ggplot2)

csv_data <- read.csv("../cars-sample.csv",
                     stringsAsFactors = FALSE)

ggplot(data = csv_data, mapping = aes(x = Weight, y = MPG, color = Manufacturer, size = Weight, alpha = 0.5))+
  geom_point()+
  scale_color_manual(values = c("bmw" = "#f2b6b2",
                                "ford" = "#c8c984",
                                "honda" = "#8cd6b7",
                                "mercedes" = "#8ed1f4",
                                "toyota" = "#eeb0f2"))



