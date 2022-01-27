import javax.swing.SwingUtilities;

public class Main {
	static DrawGraph drawGraph = new DrawGraph();
	static Legend legend = new Legend();
	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				drawGraph.createAndShowGui();
				legend.createAndShowGui();
			}
		});
	}

}
