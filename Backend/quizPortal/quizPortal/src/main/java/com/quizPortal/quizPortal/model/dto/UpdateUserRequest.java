package com.quizPortal.quizPortal.model.dto;

import com.quizPortal.quizPortal.model.Gender;

public class UpdateUserRequest {

    private String name;
    private Gender gender;
    private String linkedIn;
    private String favouriteTopics;
    private String mobile;

    public UpdateUserRequest(String name, Gender gender, String linkedIn, String favouriteTopics, String mobile) {
        this.name = name;
        this.gender = gender;
        this.linkedIn = linkedIn;
        this.favouriteTopics = favouriteTopics;
        this.mobile = mobile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
    }

    public String getFavouriteTopics() {
        return favouriteTopics;
    }

    public void setFavouriteTopics(String favouriteTopics) {
        this.favouriteTopics = favouriteTopics;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
