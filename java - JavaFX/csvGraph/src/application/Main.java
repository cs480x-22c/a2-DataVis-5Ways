package application;
	
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Queue;
import java.util.Scanner;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.chart.NumberAxis;
import javafx.scene.chart.ScatterChart;
import javafx.scene.chart.XYChart;
import javafx.scene.layout.BorderPane;


public class Main extends Application {
	static XYChart.Series series = new XYChart.Series();
	
	
	@Override
	public void start(Stage primaryStage) {
		try {
			NumberAxis xAxis = new NumberAxis(1500, 5000, 500);
			xAxis.setLabel("Weight"); 
			NumberAxis yAxis = new NumberAxis(5, 50, 5);
			yAxis.setLabel("MPG");
			ScatterChart<Number, Number> scatterChart = new ScatterChart(xAxis, yAxis); 
			scatterChart.getData().addAll(series);
			
			BorderPane root = new BorderPane(scatterChart);
			Scene scene = new Scene((Parent) root,400,400);
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws FileNotFoundException {	
		Scanner sc = new Scanner(new File("cars-sample.csv"));  
		sc.useDelimiter(",");  
		int i = 1;
		String manufac = "";
		String mpg = "";
		String weight = "";
		for(int j=0; j<10; j++) {
			sc.next();
		}
		while (sc.hasNext())  
		{  
			String s = sc.next();
			//System.out.println(s);
				
			if(i==3) {
				manufac = s;
			}
			
			if(i==4) {
				mpg = s;
			}
		
			if(i==8) {
				weight = s;
			}
			
			if(i==10) {
				if(!mpg.equals("NA") && !weight.equals("NA")) {
					System.out.println(mpg);
					System.out.println(weight);
					XYChart.Data d = new XYChart.Data(Double.parseDouble(weight), Double.parseDouble(mpg));
					
					series.getData().add(d);
				}
				i=1;
			} else {
				i++;
			}
		}   
		sc.close();   
				  
//		series.getData().add(new XYChart.Data(8, 12)); 
		// 11 round, manufacturer = 3, mpg = 4, weight = 8
		
		launch(args);
	}
}
