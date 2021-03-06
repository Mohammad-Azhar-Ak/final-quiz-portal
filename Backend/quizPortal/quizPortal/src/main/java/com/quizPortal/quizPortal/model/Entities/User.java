package com.quizPortal.quizPortal.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.quizPortal.quizPortal.model.BaseTime;
import com.quizPortal.quizPortal.model.Gender;

import javax.persistence.*;

@Entity
public class User extends BaseTime {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Integer id;

    @Column( nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @JsonIgnore
    @Column( nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String linkedIn;

    private String favouriteTopics;

    @Column(columnDefinition = "VARCHAR(10)", nullable = false)
    private String mobile;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
