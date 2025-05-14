package numbergussing;


		import java.util.Random;
		import java.util.Scanner;

		public class numberGuess {

			public static void main(String[] args) {
				Random random = new Random();
				Scanner scanner = new Scanner(System.in);

				int numberToGuess = random.nextInt(100) + 1;
				int attempts = 0;
				int guess;

				System.out.println("Number Guessing Game (1-100)");
				while (true) {
					System.out.print("Enter your guess: ");
					guess = scanner.nextInt();
					attempts++;

					if (guess < numberToGuess) {
						System.out.println("Too low! Try again.");
					} else if (guess > numberToGuess) {
						System.out.println("Too high! Try again.");
					} else {
						System.out.println("Congratulations! You guessed the number in " + attempts + " attempts.");
						break;
					}
				}
				scanner.close();
			}

	}


