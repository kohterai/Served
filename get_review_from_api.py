import json 
import string 

#get the food_name_dataset from Vasily 
#food_name_dataset is the food name 

#do the demo data for a popular restaurant nearby here with a lot of review on yelp 

def remove_punctuation(word = " "):
    "Remove punctuation from a word if there is punctuation at the end"

    punct = set(string.punctuation)

    if word[-1] in punct:
        return word[0:-1]

def pick_out_food(food_name_dataset, review_string = " "):
    "Given a string, return the food name in the string "

    word_in_review = review_string.split()

    for i in range(len(word_in_review)): 
        word_in_review[i] = remove_punctuation(word_in_review[i]) 

    
    food_in_review = []

    for word in word_in_review:
        if word in food_name_dataset:
            food_in_review.append(word)

    return food_in_review

def parse_business(business_file = " "):
    "parse business json file, return the restaurants in a list"
    "limit the location to dubai for now"

    restaurant_dataset = []

    #limit the count to 1 now 
    count = 1

    with open(business_file) as f:

        for line in f:
            json_object = json.loads(line)

            if "Restaurants" in json_object["categories"]:
                if json_object["city"] == "Dubai": 
                    restaurant_dataset.append(json_object)
                    count -= 1
                    if count == 0: break 

    print "finish parsing business_file"

    return restaurant_dataset

def get_business_id(restaurant_list):
    "return the business_id of the businesses from restaurant list as a list "

    restaurant_business_id_dataset = [] 

    for restaurant in restaurant_dataset:
        restaurant_business_id_dataset.append(restaurant["business_id"])

    return restaurant_business_id_dataset

def get_review(business_id, review_file = " "):
    "get the review of the restaurants whose business id in is business_id "

    review_dataset = [] 

    with open(review_file) as f: 

        for line in f:

            if len(review_dataset) == len(business_id): break 

            json_object = json.loads(line)
            if json_object["business_id"] in restaurant_business_id_dataset:
                review_dataset.append(json_object)

    print "finish getting the review"

    return review_dataset 

if __name__ == '__main__':

    "Yelp does not have the data of Dubai "

    "zomato api and tripadvisor api are not available right now "

    "will be using copy and paste from website to get data instead " "parse html would take too long "

    # restaurant_dataset = parse_business("yelp_academic_dataset_business.json")

    # restaurant_business_id_dataset = get_business_id(restaurant_dataset)

    # review_dataset = get_review(restaurant_business_id_dataset, "yelp_academic_dataset_review.json")



