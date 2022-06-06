{
    "title": "connection",
    "properties":  {
        
      "_id": {
        "bsonType": "string"
      },
      "premium_id": {
        "bsonType": "objectId"
      },
      "accommodations": {
        "bsonType": "string"
      },
      "user_id": {
              "bsonType": "objectId"
          },
      "seeker_id": {
          "bsonType": "objectId"
      },
      "verified_id": {
          "bsonType": "objectId"
      },
      "address": {
        "bsonType": "object",
        "properties": {
          "country": {
            "bsonType": "string"
          },
          "country_code": {
            "bsonType": "string"
          },
          "zipcode": {
            "bsonType": "string"
          },
          "location": {
            "bsonType": "object",
            "properties": {
              "coordinates": {
                "bsonType": "array",
                "items": {
                  "bsonType": "double"
                }
              },
              "is_location_exact": {
                "bsonType": "bool"
              },
              "type": {
                "bsonType": "string"
              }
            }
          },
          "street": {
            "bsonType": "string"
          },
           "cross_street": {
            "bsonType": "string"
          },
          "suburb": {
            "bsonType": "string"
          }
        }
      },
      "services_provided": {
        "bsonType": "array",
        "items": {
          "bsonType": "string"
        }
      },
      "availability": {
        "bsonType": "object",
        "properties": {
          "availability_fri": {
            "bsonType": "bool"
          },
          "availability_sat": {
            "bsonType": "bool"
          },
          "availability_sun": {
            "bsonType": "int"
          },
          "availability_mon": {
            "bsonType": "bool"
          },
          "availability_tue": {
            "bsonType": "bool"
          },
          "availability_wed": {
            "bsonType": "bool"
          },
          "availability_thur": {
            "bsonType": "bool"
          }
        }
      },
      "mobile_meet_type": {
        "bsonType": "bool"
      },
      "private_location_meet_type": {
        "bsonType": "bool"
      },
      "hotel_location_meet_type": {
        "bsonType": "bool"
      },
      "provider_required_to_book_accomodations": {
        "bsonType": "bool"
      },
      "customer_meet_type": {
        "bsonType": "string"
      },
      "seeker_sugar_dad": {
        "bsonType": "bool"
      },
      "long_term_sugar": {
        "bsonType": "bool"
      },
      "calendar_last_scraped": {
        "bsonType": "date"
      },
      "cancellation_policy": {
        "bsonType": "string"
      },
      "cleaning_fee": {
        "bsonType": "decimal"
      },
      "description": {
        "bsonType": "string"
      },
      "extra_people": {
        "bsonType": "decimal"
      },
      "first_review": {
        "bsonType": "date"
      },
      "seeker": {
        "bsonType": "object",
        "properties": {
          "seeker_about": {
            "bsonType": "string"
          },
          "seeker_has_profile_pic": {
            "bsonType": "bool"
          },
          "seeker_id": {
            "bsonType": "string"
          },
          "seeker_caters_to": {
            "bsonType": "string"
          },
          "seeker_gender": {
            "bsonType": "string"
          },
          "seeker_body_type": {
            "bsonType": "string"
          },
          "seeker_height": {
            "bsonType": "string"
          },
          "seeker_age": {
            "bsonType": "string"
          },
          "seeker_ethnicity": {
            "bsonType": "string"
          },
          "seeker_cup_size": {
            "bsonType": "string"
          },
          "seeker_hair_color": {
            "bsonType": "string"
          },
          "seeker_shoe_size": {
            "bsonType": "string"
          },
          "seeker_eye_color": {
            "bsonType": "string"
          },
          "seeker_identity_verified": {
            "bsonType": "bool"
          },
          "seeker_is_host": {
            "bsonType": "bool"
          },
          "seeker_provider_host": {
            "bsonType": "string"
          },
          "seeker_listings_count": {
            "bsonType": "int"
          },
          "seeker_location": {
            "bsonType": "string"
          },
          "seeker_name": {
            "bsonType": "string"
          },
          "seeker_neighbourhood": {
            "bsonType": "string"
          },
          "seeker_picture_url": {
            "bsonType": "string"
          },
          "seeker_response_rate": {
            "bsonType": "int"
          },
          "seeker_response_time": {
            "bsonType": "string"
          },
          "seeker_thumbnail_url": {
            "bsonType": "string"
          },
          "seeker_total_listings_count": {
            "bsonType": "int"
          },
          "seeker_url": {
            "bsonType": "string"
          },
          "seeker_verifications": {
            "bsonType": "array",
            "items": {
              "bsonType": "string"
            }
          }
        }
      },
      "consent_rules": {
        "bsonType": "string"
      },
      "consent_420": {
        "bsonType": "bool"
      },
      "consent_alcohol": {
        "bsonType": "bool"
      },
      "consent_hard_drugs": {
        "bsonType": "bool"
      },
      "consent_contraception": {
        "bsonType": "bool"
      },
      "images": {
        "bsonType": "object",
        "properties": {
          "medium_url": {
            "bsonType": "string"
          },
          "picture_url_a": {
            "bsonType": "string"
          },
           "picture_url_b": {
            "bsonType": "string"
          },
           "picture_url_c": {
            "bsonType": "string"
          },
           "picture_url_d": {
            "bsonType": "string"
          },
           "picture_url_e": {
            "bsonType": "string"
          },
           "picture_url_f": {
            "bsonType": "string"
          },
           "picture_url_g": {
            "bsonType": "string"
          },
           "picture_url_h": {
            "bsonType": "string"
          },
           "picture_url_i": {
            "bsonType": "string"
          },
           "picture_url_j": {
            "bsonType": "string"
          },
           "picture_url_k": {
            "bsonType": "string"
          },
          "thumbnail_url": {
            "bsonType": "string"
          },
          "xl_picture_url": {
            "bsonType": "string"
          }
        }
      },
      "connection_header": {
        "bsonType": "string"
      },
      "last_review": {
        "bsonType": "date"
      },
      "last_scraped": {
        "bsonType": "date"
      },
      "linktree_url": {
        "bsonType": "string"
      },
      "whatsapp_url": {
        "bsonType": "string"
      },
      "onlyfans_url": {
        "bsonType": "string"
      },
      "twitter_url": {
        "bsonType": "string"
      },
      "instagram_url": {
        "bsonType": "string"
      },
      "uberbooty_url": {
        "bsonType": "string"
      },
      "email_address": {
        "bsonType": "string"
      },
      "minimum_call_price": {
        "bsonType": "string"
      },
      "minimum_deposit": {
        "bsonType": "string"
      },
      "minimal_time": {
        "bsonType": "decimal"
      },
      "name": {
        "bsonType": "string"
      },
      "typical_connection_overview": {
        "bsonType": "string"
      },
      "notes": {
        "bsonType": "string"
      },
      "number_of_reviews": {
        "bsonType": "int"
      },
      "avg_price": {
        "bsonType": "decimal"
      },
      "payment_type_venmo": {
        "bsonType": "bool"
      },
      "payment_type_cash": {
        "bsonType": "bool"
      },
      "payment_type_credit": {
        "bsonType": "bool"
      },
      "payment_type_bitcoin": {
        "bsonType": "bool"
      },
      "payment_type_ethereum": {
        "bsonType": "bool"
      },
      "payment_type_bank_wire": {
        "bsonType": "bool"
      },
      "payment_type_home_chore": {
        "bsonType": "bool"
      },
      "trade_for": {
        "bsonType": "bool"
      },
      "payment_type_money_order": {
        "bsonType": "bool"
      },
      "nood_for_food": {
        "bsonType": "bool"
      },
      "nood_for_food_order_url": {
        "bsonType": "string"
      },
      "review_scores": {
        "bsonType": "object",
        "properties": {
          "review_scores_accuracy": {
            "bsonType": "int"
          },
          "review_scores_checkin": {
            "bsonType": "int"
          },
          "review_scores_cleanliness": {
            "bsonType": "int"
          },
          "review_scores_communication": {
            "bsonType": "int"
          },
          "review_scores_location": {
            "bsonType": "int"
          },
          "review_scores_rating": {
            "bsonType": "int"
          },
          "review_scores_value": {
            "bsonType": "int"
          }
        }
      },
      "reviews": {
        "bsonType": "array",
        "items": {
          "bsonType": "object",
          "properties": {
            "_id": {
              "bsonType": "string"
            },
            "comments": {
              "bsonType": "string"
            },
            "date": {
              "bsonType": "date"
            },
            "listing_id": {
              "bsonType": "string"
            },
            "reviewer_id": {
              "bsonType": "string"
            },
            "reviewer_name": {
              "bsonType": "string"
            }
          }
        }
      },
      "security_deposit": {
        "bsonType": "decimal"
      },
      "space": {
        "bsonType": "string"
      },
      "summary": {
        "bsonType": "string"
      },
      "transit_required": {
        "bsonType": "bool"
      },
      "hourly_price": {
        "bsonType": "decimal"
      },
      "oncall_price": {
        "bsonType": "decimal"
      },
      "outcall_price": {
        "bsonType": "decimal"
      },
      "incall_price": {
        "bsonType": "decimal"
      },
      "incall_price_two": {
        "bsonType": "decimal"
      },
      "incall_price_3": {
        "bsonType": "decimal"
      },
      "incall_price_4": {
        "bsonType": "decimal"
      },
      "incall_price_6": {
        "bsonType": "decimal"
      },
      "incall_price_overnight": {
        "bsonType": "decimal"
      },
      "incall_price_48": {
        "bsonType": "decimal"
      },
      "video_price": {
        "bsonType": "decimal"
      }
    }
  }