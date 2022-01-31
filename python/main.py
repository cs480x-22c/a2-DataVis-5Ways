import plotly.express as px
import pandas as pd


graph = px.scatter(data_frame = pd.read_csv('../a2-DataVis-5Ways/cars-sample.csv'),
                 x = 'Weight',
                 y = 'MPG',
                 size = 'Weight',
                 color = 'Manufacturer',
                 opacity = 0.5,
                 color_discrete_map = {
                    'ford': '#b5b64b',
                    'toyota': '#e9acee',
                    'bmw': '#f2acac',
                    'honda': '#8ed4b6',
                    'mercedes': '#8dcef0'
                })

graph.show()
