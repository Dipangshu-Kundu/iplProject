import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InPageNavigation from "./InPageNavigation";
import React from "react";

function MatchDetail() {
    let { id } = useParams()
    let fixedData = {
        "matchInfo": {
            "matchId": 91596,
            "matchDescription": "51st Match",
            "matchFormat": "T20",
            "matchType": "league",
            "complete": true,
            "domestic": false,
            "matchStartTimestamp": 1714744800000,
            "matchCompleteTimestamp": 1714758342415,
            "dayNight": false,
            "year": 2024,
            "state": "complete",
            "team1": {
                "id": 62,
                "name": "Mumbai Indians",
                "playerDetails": [
                    {
                        "id": 10276,
                        "name": "Ishan Kishan",
                        "fullName": "Ishan Kishan",
                        "nickName": "Ishan Kishan",
                        "captain": false,
                        "role": "WK-Batsman",
                        "keeper": true,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "",
                        "teamName": "MI",
                        "faceImageId": 352492
                    },
                    {
                        "id": 7915,
                        "name": "Suryakumar Yadav",
                        "fullName": "Suryakumar Yadav",
                        "nickName": "Suryakumar Yadav",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "MI",
                        "faceImageId": 352481
                    },
                    {
                        "id": 14504,
                        "name": "Tilak Varma",
                        "fullName": "Tilak Varma",
                        "nickName": "Tilak Varma",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "MI",
                        "faceImageId": 226525
                    },
                    {
                        "id": 13915,
                        "name": "Nehal Wadhera",
                        "fullName": "Nehal Wadhera",
                        "nickName": "Nehal Wadhera",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "MI",
                        "faceImageId": 182026
                    },
                    {
                        "id": 9647,
                        "name": "Hardik Pandya",
                        "fullName": "Hardik Pandya",
                        "nickName": "Hardik Pandya",
                        "captain": true,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 352482
                    },
                    {
                        "id": 36139,
                        "name": "Naman Dhir",
                        "fullName": "Naman Dhir",
                        "nickName": "Naman Dhir",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "MI",
                        "faceImageId": 182026,
                        "playingXIChange": "IN"
                    },
                    {
                        "id": 13169,
                        "name": "Tim David",
                        "fullName": "Tim David",
                        "nickName": "Tim David",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "MI",
                        "faceImageId": 244810,
                        "isOverseas": true
                    },
                    {
                        "id": 13320,
                        "name": "Gerald Coetzee",
                        "fullName": "Gerald Coetzee",
                        "nickName": "Gerald Coetzee",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast",
                        "teamName": "MI",
                        "faceImageId": 351631,
                        "isOverseas": true
                    },
                    {
                        "id": 466,
                        "name": "Chawla",
                        "fullName": "Piyush Chawla",
                        "nickName": "Chawla",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "MI",
                        "faceImageId": 152613
                    },
                    {
                        "id": 9311,
                        "name": "Bumrah",
                        "fullName": "Jasprit Bumrah",
                        "nickName": "Bumrah",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast",
                        "teamName": "MI",
                        "faceImageId": 352488
                    },
                    {
                        "id": 18509,
                        "name": "N Thushara",
                        "fullName": "Nuwan Thushara",
                        "nickName": "N Thushara",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 226338,
                        "inMatchChange": "MOUT",
                        "isOverseas": true
                    },
                    {
                        "id": 576,
                        "name": "Rohit",
                        "fullName": "Rohit Sharma",
                        "nickName": "Rohit",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "MI",
                        "faceImageId": 352478,
                        "playingXIChange": "OUT",
                        "inMatchChange": "MIN",
                        "splSubstitute": true
                    },
                    {
                        "id": 13496,
                        "name": "Shams Mulani",
                        "fullName": "Shams Mulani",
                        "nickName": "Shams Mulani",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Left arm orthodox",
                        "teamName": "MI",
                        "faceImageId": 182026,
                        "splSubstitute": true
                    },
                    {
                        "id": 14408,
                        "name": "Shivalik Sharma",
                        "fullName": "Shivalik Sharma",
                        "nickName": "Shivalik Sharma",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "MI",
                        "faceImageId": 182026,
                        "splSubstitute": true
                    },
                    {
                        "id": 20538,
                        "name": "Dewald Brevis",
                        "fullName": "Dewald Brevis",
                        "nickName": "Brevis",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "MI",
                        "faceImageId": 226302,
                        "splSubstitute": true,
                        "isOverseas": true
                    },
                    {
                        "id": 13646,
                        "name": "Romario Shepherd",
                        "fullName": "Romario Shepherd",
                        "nickName": "Shepherd",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 226370,
                        "splSubstitute": true,
                        "isOverseas": true
                    },
                    {
                        "id": 3007,
                        "name": "Nabi",
                        "fullName": "Mohammad Nabi",
                        "nickName": "Nabi",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "MI",
                        "faceImageId": 352437,
                        "playingXIChange": "OUT"
                    },
                    {
                        "id": 14190,
                        "name": "Kumar Kartikeya",
                        "fullName": "Kumar Kartikeya",
                        "nickName": "Kartikeya",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "",
                        "teamName": "MI",
                        "faceImageId": 327479
                    },
                    {
                        "id": 9821,
                        "name": "Luke Wood",
                        "fullName": "Luke Wood",
                        "nickName": "Wood",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Left Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 158044
                    },
                    {
                        "id": 9746,
                        "name": "Shreyas Gopal",
                        "fullName": "Shreyas Gopal",
                        "nickName": "Shreyas Gopal",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "MI",
                        "faceImageId": 226505
                    },
                    {
                        "id": 12088,
                        "name": "Harvik Desai",
                        "fullName": "Harvik Desai",
                        "nickName": "Harvik Desai",
                        "captain": false,
                        "role": "WK-Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "",
                        "teamName": "MI",
                        "faceImageId": 169799
                    },
                    {
                        "id": 13747,
                        "name": "Arjun Tendulkar",
                        "fullName": "Arjun Tendulkar",
                        "nickName": "Arjun Tendulkar",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Left Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 154048
                    },
                    {
                        "id": 14598,
                        "name": "Anshul Kamboj",
                        "fullName": "Anshul Kamboj",
                        "nickName": "Anshul Kamboj",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 182026
                    },
                    {
                        "id": 15727,
                        "name": "Akash Madhwal",
                        "fullName": "Akash Madhwal",
                        "nickName": "Akash Madhwal",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "MI",
                        "faceImageId": 182026
                    },
                    {
                        "id": 23346,
                        "name": "Kwena Maphaka",
                        "fullName": "Kwena Maphaka",
                        "nickName": "Kwena Maphaka",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 62,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "",
                        "teamName": "MI",
                        "faceImageId": 182026
                    },
                    {
                        "id": 208,
                        "name": "Mark Boucher",
                        "fullName": "Mark Boucher",
                        "nickName": "Boucher",
                        "role": "Head coach",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 157815,
                        "isSupportStaff": true
                    },
                    {
                        "id": 657,
                        "name": "Kieron Pollard",
                        "fullName": "Kieron Pollard",
                        "nickName": "Pollard",
                        "role": "Batting coach",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 226283,
                        "isSupportStaff": true
                    },
                    {
                        "id": 42670,
                        "name": "James Pamment",
                        "fullName": "James Pamment",
                        "nickName": "James Pamment",
                        "role": "Fielding coach",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 182026,
                        "isSupportStaff": true
                    },
                    {
                        "id": 25,
                        "name": "Sachin Tendulkar",
                        "fullName": "Sachin Tendulkar",
                        "nickName": "Tendulkar",
                        "role": "ICON",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 171004,
                        "isSupportStaff": true
                    },
                    {
                        "id": 111,
                        "name": "Lasith Malinga",
                        "fullName": "Lasith Malinga",
                        "nickName": "Malinga",
                        "role": "Bowling Coach",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 170724,
                        "isSupportStaff": true
                    },
                    {
                        "id": 1805,
                        "name": "Jagadeesh Arunkumar",
                        "fullName": "Jagadeesh Arunkumar",
                        "nickName": "Arunkumar",
                        "role": "Assistant Batting Coach",
                        "teamId": 62,
                        "teamName": "MI",
                        "faceImageId": 182026,
                        "isSupportStaff": true
                    }
                ],
                "shortName": "MI"
            },
            "team2": {
                "id": 63,
                "name": "Kolkata Knight Riders",
                "playerDetails": [
                    {
                        "id": 10479,
                        "name": "Salt",
                        "fullName": "Philip Salt",
                        "nickName": "Philip Salt",
                        "captain": false,
                        "role": "WK-Batsman",
                        "keeper": true,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "KKR",
                        "faceImageId": 244804,
                        "isOverseas": true
                    },
                    {
                        "id": 2276,
                        "name": "Narine",
                        "fullName": "Sunil Narine",
                        "nickName": "Narine",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "KKR",
                        "faceImageId": 152654,
                        "isOverseas": true
                    },
                    {
                        "id": 22566,
                        "name": "Angkrish Raghuvanshi",
                        "fullName": "Angkrish Raghuvanshi",
                        "nickName": "Angkrish Raghuvanshi",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Left arm orthodox",
                        "teamName": "KKR",
                        "faceImageId": 182026,
                        "inMatchChange": "MOUT"
                    },
                    {
                        "id": 9428,
                        "name": "Shreyas Iyer",
                        "fullName": "Shreyas Iyer",
                        "nickName": "Shreyas Iyer",
                        "captain": true,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "KKR",
                        "faceImageId": 352480
                    },
                    {
                        "id": 10917,
                        "name": "Venkatesh Iyer",
                        "fullName": "Venkatesh Iyer",
                        "nickName": "Venkatesh Iyer",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "KKR",
                        "faceImageId": 226278
                    },
                    {
                        "id": 10896,
                        "name": "Rinku Singh",
                        "fullName": "Rinku Singh",
                        "nickName": "Rinku Singh",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "KKR",
                        "faceImageId": 279125
                    },
                    {
                        "id": 7736,
                        "name": "Russell",
                        "fullName": "Andre Russell",
                        "nickName": "Russell",
                        "captain": false,
                        "role": "Bowling Allrounder",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast",
                        "teamName": "KKR",
                        "faceImageId": 170821,
                        "isOverseas": true
                    },
                    {
                        "id": 12337,
                        "name": "Ramandeep Singh ",
                        "fullName": "Ramandeep Singh ",
                        "nickName": "Ramandeep Singh ",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "KKR",
                        "faceImageId": 182026
                    },
                    {
                        "id": 7710,
                        "name": "Starc",
                        "fullName": "Mitchell Starc",
                        "nickName": "Starc",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "",
                        "teamName": "KKR",
                        "faceImageId": 352462,
                        "isOverseas": true
                    },
                    {
                        "id": 15861,
                        "name": "Vaibhav Arora",
                        "fullName": "Vaibhav Arora",
                        "nickName": "Vaibhav Arora",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "KKR",
                        "faceImageId": 182026
                    },
                    {
                        "id": 12926,
                        "name": "Chakaravarthy",
                        "fullName": "Varun Chakaravarthy",
                        "nickName": "Chakaravarthy",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": false,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "KKR",
                        "faceImageId": 226220
                    },
                    {
                        "id": 12344,
                        "name": "Anukul Roy",
                        "fullName": "Anukul Roy",
                        "nickName": "Anukul Roy",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Left arm orthodox",
                        "teamName": "KKR",
                        "faceImageId": 153915,
                        "splSubstitute": true
                    },
                    {
                        "id": 1836,
                        "name": "Manish Pandey",
                        "fullName": "Manish Pandey",
                        "nickName": "Manish Pandey",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "KKR",
                        "faceImageId": 171022,
                        "inMatchChange": "MIN",
                        "splSubstitute": true
                    },
                    {
                        "id": 9025,
                        "name": "Srikar Bharat",
                        "fullName": "Srikar Bharat",
                        "nickName": "Srikar Bharat",
                        "captain": false,
                        "role": "WK-Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "",
                        "teamName": "KKR",
                        "faceImageId": 332894,
                        "splSubstitute": true
                    },
                    {
                        "id": 13748,
                        "name": "Sherfane Rutherford",
                        "fullName": "Sherfane Rutherford",
                        "nickName": "Rutherford",
                        "captain": false,
                        "role": "Batting Allrounder",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "KKR",
                        "faceImageId": 226373,
                        "splSubstitute": true,
                        "isOverseas": true
                    },
                    {
                        "id": 13494,
                        "name": "Chetan Sakariya",
                        "fullName": "Chetan Sakariya",
                        "nickName": "Sakariya",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Left Arm fast medium",
                        "teamName": "KKR",
                        "faceImageId": 169708,
                        "splSubstitute": true
                    },
                    {
                        "id": 24729,
                        "name": "Harshit Rana",
                        "fullName": "Harshit Rana",
                        "nickName": "Harshit Rana",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast medium",
                        "teamName": "KKR",
                        "faceImageId": 182026,
                        "playingXIChange": "OUT"
                    },
                    {
                        "id": 36487,
                        "name": "Suyash Sharma",
                        "fullName": "Suyash Sharma",
                        "nickName": "Suyash Sharma",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm leg break",
                        "teamName": "KKR",
                        "faceImageId": 182026
                    },
                    {
                        "id": 13213,
                        "name": "Gurbaz",
                        "fullName": "Rahmanullah Gurbaz",
                        "nickName": "Gurbaz",
                        "captain": false,
                        "role": "WK-Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "KKR",
                        "faceImageId": 352440
                    },
                    {
                        "id": 8393,
                        "name": "Chameera",
                        "fullName": "Dushmantha Chameera",
                        "nickName": "Chameera",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm fast",
                        "teamName": "KKR",
                        "faceImageId": 244665
                    },
                    {
                        "id": 36501,
                        "name": "Allah Ghazanfar",
                        "fullName": "Allah Ghazanfar",
                        "nickName": "Allah Ghazanfar",
                        "captain": false,
                        "role": "Bowler",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "KKR",
                        "faceImageId": 182026
                    },
                    {
                        "id": 33129,
                        "name": "Sakib Hussain",
                        "fullName": "Sakib Hussain",
                        "nickName": "Sakib Hussain",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "RIGHT",
                        "bowlingStyle": "Right Arm medium",
                        "teamName": "KKR",
                        "faceImageId": 182026
                    },
                    {
                        "id": 9204,
                        "name": "Nitish Rana",
                        "fullName": "Nitish Rana",
                        "nickName": "Nitish Rana",
                        "captain": false,
                        "role": "Batsman",
                        "keeper": false,
                        "substitute": true,
                        "teamId": 63,
                        "battingStyle": "LEFT",
                        "bowlingStyle": "Right Arm off break",
                        "teamName": "KKR",
                        "faceImageId": 171047
                    },
                    {
                        "id": 3870,
                        "name": "Chandrakant Pandit",
                        "fullName": "Chandrakant Pandit",
                        "nickName": "Pandit",
                        "role": "Head coach",
                        "teamId": 63,
                        "teamName": "KKR",
                        "faceImageId": 182026,
                        "isSupportStaff": true
                    },
                    {
                        "id": 308,
                        "name": "Gautam Gambhir",
                        "fullName": "Gautam Gambhir",
                        "nickName": "Gambhir",
                        "role": "Mentor",
                        "teamId": 63,
                        "teamName": "KKR",
                        "faceImageId": 154519,
                        "isSupportStaff": true
                    },
                    {
                        "id": 1463,
                        "name": "Abhishek Nayar",
                        "fullName": "Abhishek Nayar",
                        "nickName": "Nayar",
                        "role": "Assistant coach",
                        "teamId": 63,
                        "teamName": "KKR",
                        "faceImageId": 156298,
                        "isSupportStaff": true
                    },
                    {
                        "id": 3873,
                        "name": "Bharat Arun",
                        "fullName": "Bharat Arun",
                        "nickName": "Arun",
                        "role": "Bowling coach",
                        "teamId": 63,
                        "teamName": "KKR",
                        "faceImageId": 182026,
                        "isSupportStaff": true
                    },
                    {
                        "id": 640,
                        "name": "Ryan ten Doeschate",
                        "fullName": "Ryan ten Doeschate",
                        "nickName": "ten Doeschate",
                        "role": "Fielding Coach",
                        "teamId": 63,
                        "teamName": "KKR",
                        "faceImageId": 155932,
                        "isSupportStaff": true
                    }
                ],
                "shortName": "KKR"
            },
            "series": {
                "id": 7607,
                "name": "Indian Premier League 2024",
                "seriesType": "IPL",
                "startDate": 1710979200000,
                "endDate": 1716768000000,
                "seriesFolder": "",
                "odiSeriesResult": "",
                "t20SeriesResult": "''",
                "testSeriesResult": "",
                "tournament": true
            },
            "umpire1": {
                "id": 8905,
                "name": "Jayaraman Madanagopal",
                "country": "IND"
            },
            "umpire2": {
                "id": 9608,
                "name": "Tapan Sharma",
                "country": "IND"
            },
            "umpire3": {
                "id": 8034,
                "name": "Michael Gough",
                "country": "ENG"
            },
            "referee": {
                "id": 1820,
                "name": "Pankaj Dharmani",
                "country": "IND"
            },
            "tossResults": {
                "tossWinnerId": 62,
                "tossWinnerName": "Mumbai Indians",
                "decision": "Bowling"
            },
            "result": {
                "resultType": "win",
                "winningTeam": "Kolkata Knight Riders",
                "winningteamId": 63,
                "winningMargin": 24,
                "winByRuns": true,
                "winByInnings": false
            },
            "venue": {
                "id": 81,
                "name": "Wankhede Stadium",
                "city": "Mumbai",
                "country": "India",
                "timezone": "+05:30",
                "latitude": "18.938956",
                "longitude": "72.825719"
            },
            "status": "Mumbai Indians opt to bowl",
            "playersOfTheMatch": [
                {
                    "id": 10917,
                    "name": "Venkatesh Iyer",
                    "fullName": "Venkatesh Iyer",
                    "nickName": "Venkatesh Iyer",
                    "captain": false,
                    "keeper": false,
                    "substitute": false,
                    "teamName": "Madhya Pradesh",
                    "faceImageId": 226278
                }
            ],
            "playersOfTheSeries": [],
            "revisedTarget": {
                "reason": ""
            },
            "matchTeamInfo": [
                {
                    "battingTeamId": 63,
                    "battingTeamShortName": "KKR",
                    "bowlingTeamId": 62,
                    "bowlingTeamShortName": "MI"
                },
                {
                    "battingTeamId": 62,
                    "battingTeamShortName": "MI",
                    "bowlingTeamId": 63,
                    "bowlingTeamShortName": "KKR"
                }
            ],
            "isMatchNotCovered": false,
            "HYSEnabled": 0,
            "livestreamEnabled": false,
            "isFantasyEnabled": true,
            "livestreamEnabledGeo": [
                "MA",
                "KW",
                "EG",
                "TN",
                "JO",
                "MR",
                "US",
                "BH",
                "SD",
                "LY",
                "IQ",
                "SA",
                "MU",
                "AE",
                "LB",
                "DJ",
                "SO",
                "SS",
                "YT",
                "MG",
                "YE",
                "RE",
                "OM",
                "DZ",
                "QA",
                "CA",
                "TD",
                "PS"
            ],
            "alertType": "auto",
            "shortStatus": "KKR won",
            "matchImageId": 402272
        },
        "venueInfo": {
            "established": 1974,
            "capacity": "33,000",
            "knownAs": null,
            "ends": "Garware Pavilion End, Tata End",
            "city": "Mumbai",
            "country": "India",
            "timezone": "+05:30",
            "homeTeam": "Mumbai, Mumbai Indians",
            "floodlights": true,
            "curator": "Sudhir Naik",
            "profile": "<b>Introduction</b>:\n\nRelatively younger than old-world grounds like Chepauk, Eden Gardens and Feroz Shah Kotla, the Wankhede stadium has its own fair share of unforgettable memories attached to it. It has been home to some of the greatest cricketers to have played for the country. \n\n<b>Venue history</b>:\n\nMumbai has played host to Test matches at three different venues - the first ever Test in India was hosted at the Bombay Gymkhana in 1933-34 against England. After the second World War, Cricket Club of India's (CCI) Brabourne Stadium became the city's second ground. However, a dispute between the CCI and the Mumbai Cricket Association (MCA) over the allocation of tickets for cricket matches forced the latter to build a separate stadium. The stadium was named after the association's president Barrister Sheshrao Krishnarao Wankhede. The initial capacity of the stadium was around 45,000. The first Test was staged in the season of 1974-75 when West Indies toured India.\n\n<b>Venue description</b>:\n\nThe stadium has seven different stands - Sunil Gavaskar Stand, North Stand, Vijay Merchant Stand, Sachin Tendulkar Stand, MCA Pavilion, Divecha Pavilion, and Garware Pavilion.\n\nIn 1996, Wankhede stadium underwent an upgrade, during which, floodlights were installed to provide excellent lighting to host the day and night cricket matches. Wankhede received its second upgrade in 2010-11 before the 2011 World Cup and the ground was unavailable for domestic and international cricket until February 2011. One of the highlights of the stadium is the suspended cantilever roofs. No beam supports on the roofs ensure better view for the spectators. The stadium has 20 elevators for North and South stands. After its renovation and installation of bucket seats the capacity of the Wankhede Stadium was reduced to around 33,000.\n\n<b>How does the pitch play?</b>\n\nThe wicket at the Wankhede offers help for both the pacers and spinners. Close proximity to the Arabian sea helps the swing bowlers considerably, especially during early hours of the day. However, spinners have been known to benefit during the last couple of days of a Test match as the pitch turns into a vicious turner. Although the new ball does a bit in limited-overs cricket, the pitch tends to ease out and favour batsmen as the innings progresses. The venue provides great entertainment when it comes to T20 cricket.\n\n<b>Trivia</b>:\n\nBangladesh scored the lowest ODI total at the stadium. They were 115 all out, when it competed with India in the 1998 season.\n\nRavi Shastri's six sixes in an over off Baroda's Tilak Raj en route to the fastest double-hundred in first-class cricket was on this ground in 1984-85.\n\nby <b>Sonali Dhulap</b>",
            "imageUrl": "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/81.jpg",
            "ground": "Wankhede Stadium",
            "groundLength": 0,
            "groundWidth": 0,
            "otherSports": null
        },
        "broadcastInfo": [

        ]
    }

    const [data, setData] = useState([])
    async function FetchMatchDetail() {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result)
            console.log(result);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { 
        FetchMatchDetail()
    }, [])
    return (
        <>
            <div>MatchDetail1</div>
            {
                data.length<=0?(<h1>Loading</h1>):
                ( <InPageNavigation teams={[data.matchInfo.team1.shortName,data.matchInfo.team2.shortName]}>
                    {
                        data.matchInfo.team1.playerDetails.map((data)=>(
                            <p>
                                <h1>{data.fullName}</h1>
                                <h3>{data.role}</h3>
                            </p>
                        ))
                    }
                    {
                        data.matchInfo.team2.playerDetails.map((data)=>(
                            <p>
                                <h1>{data.fullName}</h1>
                                <h3>{data.role}</h3>
                            </p>
                        ))
                    }
                
                </InPageNavigation>)
            }
           
        </>

    )
}

export default MatchDetail