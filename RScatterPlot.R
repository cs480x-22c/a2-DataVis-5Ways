install.packages("ggplot2", dependencies = TRUE, repos = "http://cran.rstudio.com/")
library("ggplot2")

cars = read.csv('C:/Users/Gabi/Documents/WPI CS/Data Vision/a2-DataVis-5Ways/cars-sample.csv')
df<- data.frame(cars)
ggplot(df, aes(x=Weight, y=MPG)) +
  geom_point(aes(color=Manufacturer, size = Weight, alpha=0.5)) 

