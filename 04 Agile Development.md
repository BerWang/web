
# Agile Development

Each week you will be expected to complete a series of lab activities. You will be required to reflect on these in your assignment so make sure you keep records of what you have done.

You should refer to [this week's presentation](https://drive.google.com/open?id=1nAEwEr7C6VTcRLSTnGqzhDvFzvek8fcKZuNHcjikBBs).

## 1 Sprint Planning

As a team:

1. Identify who will be the **Scrum Master** and who will be the **Product Owner**.
2. Ideally with the client present, take the first user story from the top row of your user story map:
    1. The product owner describes it from the user's perspective
    2. Discusses how it can be implemented and work collaboratively on a whiteboard/flipchart to define it's UI until the client/product owner is satisfied/
    3. Explain the success criteria (how will the team know they have completed the story implementation.
3. Once the client has left:
    1. Break the story into the component tasks and write these on sticky notes.
    2. Use planning poker to estimate how many hours each task will take.
        -  If the estimated time for a task is longer than 4 hours, consider splitting the task down.
    3. Add them to the left column of your Kanban board.
    4. Finally the _Scrum Master_:
        1. adds up the estimated durations for the tasks on the Kanban board and
        2. draws out a burndown chart:
            1. The X axis should show the days in the sprint.
            2. the Y axis should show the combined duration.
        3. draws a staight line from the top of the Y axis to the end of the X axis to indicate the optimal burn rate. 

### 1.1 The Kanban Board

For this first sprint, your Kanban board should have 4 columns as shown:
```
╔════════════════╦════════════════╦════════════════╦════════════════╗
║ To Do          ║ Planning       ║ Implementation ║ Done           ║
╟────────────────╫────────────────╫────────────────╫────────────────╢
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
║   ┌────────┐   ║                ║                ║                ║
║   │        │   ║                ║                ║                ║
║   └────────┘   ║                ║                ║                ║
╚════════════════╩════════════════╩════════════════╩════════════════╝
```

At the start of the sprint, all tasks should be in the first column. By the end of the sprint, all tasks should be in the last column.

### 1.2 The Burndown Chart

Here is an example of a burndown chart showing the line of optimal development. In this example the sprint lasts from Mon to Fri and there are an estimated 40 hours of development. It shows that the optimum burn rate would be 10 hours per day.
```
  40 ║*
     ║   *
  30 ║      *
     ║         *
  20 ║            *
     ║               *
  10 ║                  *
     ║                     *
  00 ║                        *
     ╚══════════════════════════
       M    T     W     T     F
```

## 2 Conducting the Sprint

During this first sprint, your development team will need to carry out a **Daily Standup meeting** every morning. Before this meeting, the _Scrum Master_ should:

1. Check the _Kanban board_ is up to date.
1. add up the hours for all the tasks remaining incomplete on the Kanban board and using this to update the _Burndown Chart_.
```
╔════════════════╦════════════════╦════════════════╦════════════════╗
║ To Do          ║ Planning       ║ Implementation ║ Done           ║
╟────────────────╫────────────────╫────────────────╫────────────────╢
║   ┌────────┐   ║                ║   ┌────────┐   ║   ┌────────┐   ║
║   │        │   ║                ║   │        │   ║   │        │   ║
║   └────────┘   ║                ║   └────────┘   ║   └────────┘   ║
║                ║                ║                ║                ║
║                ║                ║                ║                ║
║                ║                ║                ║                ║
║                ║                ║                ║                ║
║                ║                ║                ║                ║
║                ║                ║                ║                ║
╚════════════════╩════════════════╩════════════════╩════════════════╝
From this Kanban board you can see that one of the tasks has been 
completed (and so these hours come off the burndown chart).
One of the tasks has been started but is not yet complete (this stays 
on the burndown chart)
The last task has not been fully planned out, this task should be a 
priority until the next daily standup.
```
```
  40 ║*
     ║   *  o
  30 ║      *     o                 As you can see from this example, by the Wednesday
     ║         *                    meeting the team are behind schedule. They need to
  20 ║            *                 identify *why* this has happened:
     ║               *                * poor estimation?
  10 ║                  *             * one of the teams has hit a problem?
     ║                     *          * members of the team off sick?
  00 ║                        *
     ╚══════════════════════════    Can they make up the work by the Friday?
       M    T     W     T     F
```

During the meeting:

1. The Scrum Master reviews the burndown chart and tells the team whether they are ahead or behind schedule:
2. Now each member:
    1. explains what they have achieved since the last daily standup meeting.
    2. uses the Kanban board to identify the tasks they will work on until the next meeting (tomorrow), flags with the team responsible and moves these forward on the board.
    3. Describes any technical challenges that are holding back development work.

If any problems were identified during the standup these will need to be resolved by the appropriate team immediately **after** the daily standup. Make sure the resolution is explained to the _Scrum Master_ before continuing work.

Now each team have tasks assigned and will need to implement these before the next daily standup.

## 3 Review Meeting

You will be given a date for the review meeting, this will typically be a week after the start of the sprint. During this meeting you will be expected to do a local demo of the software you built during the sprint so make sure you are prepared.

1. The **Product Owner** reads the user story/storys completed during the sprint.
2. The **Scrum Master** demonstrates the new features to the client.
3. Any bugs identified are added to the Kanban board to be addressed in the next sprint.

The team then move on to the next _sprint planning meeting_ whilst the client is present.

## 4 Retrospective

Each week the development team should meet up (without the client) and ask each member of the team to identify:

1. What they should continue to do (existing good practice)
2. What they should **start** doing (new good practice)
2. What they should **stop** doing (eliminiate bad practices)
