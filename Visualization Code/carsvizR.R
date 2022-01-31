library(ggplot2)
library(ggplotly)
library(plotly)
library(gapminder)

df = read.csv("C:\\Users\\balle\\Documents\\a2-DataVis-5Ways\\cars-sample.csv")

df <- df[-c(3,4), ] #Dropped the null MPG rows
df['size'] = 1:95

df[df$Weight < 2000, ]['size'] = 20
df[df$Weight >= 2000, ]['size'] = 90
df[df$Weight >= 3000, ]['size'] = 200
df[df$Weight >= 4000, ]['size'] = 600

p <- ggplot(df, aes(x=Weight, y=MPG, color=Manufacturer, size =size, alpha = 0.5)) + geom_point()

ggplotly(p)