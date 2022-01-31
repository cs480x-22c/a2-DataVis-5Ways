#install.packages("ggplot2", repos = "http://cran.us.r-project.org")
#install.packages("ggrepel", repos = "http://cran.us.r-project.org")

library(ggplot2)
library(ggrepel)

pdf(NULL)

data <- read.csv('./cars-sample.csv')
# referenced this website's code http://www.sthda.com/english/wiki/ggplot2-scatter-plots-quick-start-guide-r-software-and-data-visualization
ggplot(data, aes(x=Weight, y=MPG, label=Car)), size=2, label.size=NA, fill=NA, alpha=0.5, min.segment.length=0, force=5, max.overlaps=Inf)




ggsave('ggplot.png')