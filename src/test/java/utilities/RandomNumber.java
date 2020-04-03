package utilities;

import java.util.Random;

public class RandomNumber {

public  int getRandomNumber4Digits() {
	int randomInt = 0;
	Random randomGenerator = new Random();
	randomInt = randomGenerator.nextInt(9000)+1000;
	if (randomInt - 1 == -1) {
		return randomInt;
	} else {
		return randomInt - 1;
	}
}
	
}
