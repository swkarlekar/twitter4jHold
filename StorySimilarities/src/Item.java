import java.util.ArrayList;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;


public class Item extends Entity {
	private String name; 
	private String id; 
	private ArrayList<String> tags = new ArrayList<String>();
	public Item(String n, String d)
	{
		super.setName(n);
		String[] array = n.split(" ");
		for(int i = 0; i < array.length; i++)
			super.addTag(array[i]);
		super.setId(d);
		//super.setIncomingConnections(0);
		//super.setOutgoingConnections(0);

	}
	@Override
	public int compareTo(Entity a) {
		// TODO Auto-generated method stub
		int tagsims = (int)(CollectionUtils.intersection(this.getTags(),a.getTags()).size() * 1);
		double distance = StringUtils.getLevenshteinDistance(this.getName(), a.getName());
		int weighteddistance = (int)(1.0/(distance+1)*240);
		return weighteddistance+tagsims*40;
	}

}
