package com.company.service;

import com.company.model.Tweet;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TwitterConsoleService {
    private static List<Tweet> tweets = new ArrayList<>();

    public static void run() {
        Scanner userInput = new Scanner(System.in);
        System.out.println("What command do you want to run [list, add]");
        String userOption = userInput.nextLine();

        if (userOption.equals("list")) {
            listTweets();
        } else if (userOption.equals("add")) {
            addTweet();
        }

        run();
    }

    public static void listTweets() {
        tweets.stream().forEach(tweet -> {
            System.out.println("Tweet name: " + tweet.getUserName());
            System.out.println("Tweet message: " + tweet.getMessage());
        });
    }
    public static void addTweet() {
        Scanner userInput = new Scanner(System.in);

        System.out.println("What is your name?");
        String userName = userInput.nextLine();
        System.out.println("What is your tweet");
        String message = userInput.nextLine();

        Tweet userTweet = new Tweet();
        userTweet.setUserName(userName);
        userTweet.setMessage(message);

        tweets.add(userTweet);
    }
}
