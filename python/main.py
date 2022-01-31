import plotly.express as px
import pandas as pd

colors = {
    'ford': '#d0d08d',
    'toyota': '#ecadf7',
    'bmw': '#f4ada7',
    'honda': '#8bd7b4',
    'mercedes': '#8fd3f8'
}

graph = px.scatter(data_frame = pd.read_csv('cars-sample.csv'),
                 x = 'Weight',
                 y = 'MPG',
                 size = 'Weight',
                 color = 'Manufacturer',
                 opacity = 0.5,
                 color_discrete_map = colors)

graph.show()