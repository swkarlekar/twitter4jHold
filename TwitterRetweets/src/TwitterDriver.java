import java.util.List;

import twitter4j.Status;
import twitter4j.User;
import twitter4j.conf.*;


public class TwitterDriver {

	public static void main(String[] args) {
		
		TwitterService twit = new TwitterService();
		List<Status> nest = twit.getTweets("#obama", "2014-08-12", "2015-08-06", 100);
		long curRTUserID = 244555668;
		for(Status tweet : nest)
		{ 
			Status retweetedStatus = tweet.getRetweetedStatus();
			while(retweetedStatus != null)
			{
			System.out.println("THIS HAS BEEN RETWEETED");
			User curRTUser = retweetedStatus.getUser();
			curRTUserID = curRTUser.getId();
			System.out.println(" users " + curRTUserID + " " + retweetedStatus.getText());
			retweetedStatus = tweet.getRetweetedStatus();
			}
			//System.out.println(tweet.getId() + "\t" + tweet.getUser().getName() + "\t" + tweet.getText());
		}
		//TwitterImpl twit = new TwitterImpl(new ConfigurationBase(), new Authorization());

	}

}
