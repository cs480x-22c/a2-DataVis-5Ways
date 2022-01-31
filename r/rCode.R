cs = read.csv("C:\\Users\\bookl\\OneDrive\\Documents\\WPI Stuff\\CS480\\a2-DataVis-5Ways\\cars-sample.csv")
head(cs)
library(ggplot2)
# Change the point size, and shape
ggplot(cs, aes(x=Weight, y=MPG, color=Manufacturer)) + geom_point(aes(size=Weight))
