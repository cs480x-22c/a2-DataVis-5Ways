# 02-DataVis-5ways

Assignment 2 - Data Visualization, 5 Ways  
===
# R + ggplot2 + R Markdown
I used ggplot2 to create this scatter plot. This was not too difficult but I did have some trouble properly importing the cars-sample.csv file into R. 

Libraries:
- ggplot2

![Screenshot (55)](https://user-images.githubusercontent.com/48228807/151817989-af94b289-eed9-494a-9e8e-ee6609f07232.png)

# Python 
The first plot I made with Python was with Pandas and Matplotlib. This was easier than using d3 but was difficult to learn the functionality of the Matplotlib function, especially when it came to color mapping. First I imported the cars-sample.cvs file with Pandas and converted it into a dataframe. This made the data easier to work with and compatible with the Matplotlib scatter plot function. Then I applied the scatterplot using the data frame created and Matplotlib functions.

The second plot I made with Python was with Seaborn and Pandas. Seaborn scatterplot is similar to Matplotlib but made the scatterplot more customizable and automatically created a legend for the plot based on manufacturers when specified. 

Libraries:
- Pandas
- Matplotlib
- Seaborn 

Matlibplot:
![PythonMatlibplot](https://user-images.githubusercontent.com/48228807/151818288-502f6f17-fc42-49b7-b2ea-c39cf86a1b7a.png)

Seaborn:
![PythonSeaborn](https://user-images.githubusercontent.com/48228807/151818406-47ef3c13-e169-447a-b151-ab2f894bce43.png)

# JavaScript + D3
To create the scatterplot in d3 was more difficult than in R. I was able to create this by importing the csv file, scaling the x and y axis, then appending circles to the graph using the data. The d3.scaleOrdinal library was used to color code the data by Manufacturer. 
Libraries:
- d3
- d3.scaleOrdinal

![Screenshot (56)](https://user-images.githubusercontent.com/48228807/151818860-46e59a28-19c5-4bd3-88b5-5dae3316d09c.png)


Readme Requirements
---

A good readme with screenshots and structured documentation is required for this project. 
It should be possible to scroll through your readme to get an overview of all the tools and visualizations you produced.

- Each visualization should start with a top-level heading (e.g. `# d3`)
- Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.
- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

Other Requirements
---

0. Your code should be forked from the GitHub repo.
1. Place all code, Excel sheets, etcetera in a named folder. For example, `r-ggplot, matlab, mathematica, excel` and so on.
2. Your writeup (readme.md in the repo) should also contain the following:

- Description of the Technical achievements you attempted with this visualization.
  - Some ideas include interaction, such as mousing over to see more detail about the point selected.
- Description of the Design achievements you attempted with this visualization.
  - Some ideas include consistent color choice, font choice, element size (e.g. the size of the circles).

GitHub Details
---

- Fork the GitHub Repository. You now have a copy associated with your username.
- Make changes to fulfill the project requirements. 
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.

Grading
---

Grades on a 120 point scale. 
24 points will be based on your Technical and Design achievements, as explained in your readme. 

Make sure you include the files necessary to reproduce your plots.
You should structure these in folders if helpful.
We will choose some at random to run and test.

**NOTE: THE BELOW IS A SAMPLE ENTRY TO GET YOU STARTED ON YOUR README. YOU MAY DELETE THE ABOVE.**

# R + ggplot2 + R Markdown

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To visualized the cars dataset, I made use of ggplot2's `geom_point()` layer, with aesthetics functions for the color and size.

While it takes time to find the correct documentation, these functions made the effort creating this chart minimal.

![ggplot2](img/ggplot2.png)

# d3...

(And so on...)


## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI Forever**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: As demonstrated in my colorscheme...
