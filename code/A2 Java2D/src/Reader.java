import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Reader {
	public List<Integer> Weight;
	public List<Integer> Size;
	public List<Double> MPG;
	public List<String> Color;

	private static final Pattern COMMA_DELIMITER = Pattern.compile(",");

	public Reader(String file) {
		this.Weight = new ArrayList<Integer>();
		this.Size = new ArrayList<Integer>();
		this.MPG = new ArrayList<Double>();
		this.Color = new ArrayList<String>();
		readInfo(file);
	}

	private static List<String> readCSV(String line) {
		List<String> values = new ArrayList<String>();
		try (Scanner rowScanner = new Scanner(line)) {
			rowScanner.useDelimiter(COMMA_DELIMITER);
			while (rowScanner.hasNext()) {
				values.add(rowScanner.next());
			}
		}
		return values;
	}

	private void readInfo(String file) {
		List<List<String>> records = new ArrayList<>();
		try (Scanner scanner = new Scanner(new File(file))) {
			while (scanner.hasNextLine()) {
				records.add(readCSV(scanner.nextLine()));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		for (int i = 1; i < records.size(); i++) {
			Weight.add(Integer.parseInt(records.get(i).get(7)));
			double mpg = (records.get(i).get(3).equals("NA")) ? 0 : Double.parseDouble(records.get(i).get(3));
			MPG.add(mpg);
			Color.add((records.get(i).get(2).equals('"' + "honda" + '"')) ? "red"
					: (records.get(i).get(2).equals('"' + "toyota" + '"')) ? "green"
							: (records.get(i).get(2).equals('"' + "bmw" + '"')) ? "blue"
									: (records.get(i).get(2).equals('"' + "mercedes" + '"')) ? "purple" : "black");
			Size.add(Integer.parseInt(records.get(i).get(7)) >= 4000 ? 200
					: (Integer.parseInt(records.get(i).get(7)) >= 3000) ? 170
							: (Integer.parseInt(records.get(i).get(7)) >= 2000) ? 140
									: (Integer.parseInt(records.get(i).get(7)) >= 1000) ? 110
										: (Integer.parseInt(records.get(i).get(7)) >= 0) ? 80 : 0);
			System.out.println(i);
		}
		for (int j = 0; j < MPG.size(); j++) {
			System.out.println(MPG.get(j) + ", " + Color.get(j) + ", " + Size.get(j) + ", " + Weight.get(j));
		}
	}
}
