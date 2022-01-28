import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.geom.Ellipse2D;
import javax.swing.*;

@SuppressWarnings("serial")
public class DrawGraph extends JPanel {
	private final int PREF_W;
	private final int PREF_H;
	private final int BORDER_GAP;
	private final int GRAPH_POINT_WIDTH;
	private Reader reader;
	private final int SIZE;

	public DrawGraph() {
		this.PREF_W = 1140;
		this.PREF_H = 800;
		this.BORDER_GAP = 60;
		this.GRAPH_POINT_WIDTH = 12;
		this.reader = new Reader("src\\cars-sample.csv");
		this.SIZE = reader.Size.size();
	}

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		Graphics2D g2 = (Graphics2D) g;
		g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		String[] numx = { "2000", "2500", "3000", "3500", "4000", "4500", "5000" };
		String[] numy = { "5", "10", "15", "20", "25", "30", "35", "40", "45" };

		// create x and y axes
		g2.drawLine(BORDER_GAP, 800 - BORDER_GAP, BORDER_GAP, BORDER_GAP);
		g2.drawString("1500", GRAPH_POINT_WIDTH + BORDER_GAP - 16, getHeight() - 45);
		g2.drawLine(BORDER_GAP, 800 - BORDER_GAP, getWidth() - BORDER_GAP, getHeight() - BORDER_GAP);
		g2.setFont(new Font("TimesRoman", Font.PLAIN, 32));
		g2.drawString("Weight", (getWidth() / 2) - BORDER_GAP, getHeight() - 15);
		g2.rotate(-Math.PI / 2);
		g2.drawString("MPG", (int) -(getWidth() / 2.8), (getHeight() / 2) - 370);
		g2.setFont(new Font("TimesRoman", Font.PLAIN, 12));
		g2.rotate(Math.PI / 2);

		for (int i = 0; i < SIZE; i++) {
			int y0 = getHeight() - (((i + 1) * (getHeight() - BORDER_GAP * 2)) / 9 + BORDER_GAP);
			int y1 = y0;
			int x0 = BORDER_GAP;
			int x1 = getWidth() - BORDER_GAP;
			g2.drawLine(x0, y0, x1, y1);
			if (i < 9) {
				g2.drawString(numy[i % 9], GRAPH_POINT_WIDTH + BORDER_GAP - 30, y0 + 5);
			}
		}

		for (int i = 0; i < SIZE; i++) {
			int x0 = (i + 1) * 1020 / 7 + BORDER_GAP;
			int x1 = x0;
			int y0 = getHeight() - BORDER_GAP;
			int y1 = BORDER_GAP;
			g2.drawLine(x0, y0, x1, y1);
			if (i < 7) {
				g2.drawString(numx[i % 7], x1 - 5, y0 + 15);
			}
		}

		for (int j = 0; j < SIZE; j++) {
			double x = ((reader.Weight.get(j) * 3 / 10) - 355) - BORDER_GAP;
			double y = 730 - (reader.MPG.get(j) * 15);
			Shape circle = new Ellipse2D.Double(x, y, reader.Size.get(j) / 200, reader.Size.get(j) / 200);
			g2.fill(circle);
			g2.setColor((reader.Color.get(j) == "red") ? new Color(255, 0, 0, 122)
					: (reader.Color.get(j) == "green") ? new Color(0, 255, 0, 122)
							: (reader.Color.get(j) == "blue") ? new Color(0, 0, 255, 122)
									: (reader.Color.get(j) == "black") ? new Color(0, 0, 0, 122)
											: new Color(255, 0, 255, 122));
		}
	}

	@Override
	public Dimension getPreferredSize() {
		return new Dimension(PREF_W, PREF_H);
	}

	public void createAndShowGui() {
		DrawGraph mainPanel = new DrawGraph();
		JFrame frame = new JFrame("DrawGraph");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().add(mainPanel);
		frame.pack();
		frame.setResizable(false);
		frame.setLocationByPlatform(true);
		frame.setVisible(true);
	}
}
