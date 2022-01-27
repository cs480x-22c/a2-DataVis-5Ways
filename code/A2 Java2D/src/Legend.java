import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.geom.Ellipse2D;

import javax.swing.*;

@SuppressWarnings("serial")
public class Legend extends JPanel {
	private final int PREF_W;
	private final int PREF_H;
	private static final String[] Color = { "red", "green", "blue", "yellow", "black" };

	public Legend() {
		this.PREF_W = 300;
		this.PREF_H = 300;
	}

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		Graphics2D g2 = (Graphics2D) g;
		g2.setStroke(new BasicStroke(5));
		g2.drawLine(0, 50, PREF_W, 50);
		g2.setStroke(new BasicStroke(10));
		g2.drawLine(0, 0, PREF_W, 0);
		g2.drawLine(0, PREF_H, PREF_W, PREF_H);
		g2.drawLine(PREF_W, PREF_H, PREF_W, 0);
		g2.drawLine(0, PREF_H, 0, 0);
		g2.draw(getBounds());
		g2.setFont(new Font("TimesRoman", Font.BOLD, 30));
		g2.drawString("Legend", (PREF_W / 2) - 43, 35);
		for (int j = 0; j < 5; j++) {
			g2.setColor((Color[j] == "red") ? new Color(255, 0, 0, 122)
					: (Color[j] == "green") ? new Color(0, 255, 0, 122)
							: (Color[j] == "blue") ? new Color(0, 0, 255, 122)
									: (Color[j] == "black") ? new Color(0, 0, 0, 122) : new Color(255, 0, 255, 122));
			g2.fill(new Ellipse2D.Double(20, (40 * j) + 80, 20, 20));
			g2.drawString(
					(Color[j] == "red") ? "Honda"
							: (Color[j] == "green") ? "Toyota"
									: (Color[j] == "blue") ? "BMW" : (Color[j] == "black") ? "Ford" : "Mercedes",
					60, (40 * j) + 100);
		}
	}

	public Dimension getPreferredSize() {
		return new Dimension(PREF_W, PREF_H);
	}

	public void createAndShowGui() {
		Legend mainPanel = new Legend();
		JFrame frame = new JFrame("Legend");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().add(mainPanel);
		frame.pack();
		frame.setResizable(false);
		frame.setLocationByPlatform(true);
		frame.setVisible(true);
	}
}