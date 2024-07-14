# Unibuddy Engineering Exercise Submission

This fork includes updates to address parts 1, 2 and 3 of the exercise. 

### Part 1

Fixes 2 issues with logic around promises in `src/message.resolver.ts`

### Part 2

Implements functionality so that the ‘deleted’ property on instances of ChatMessage is set to true, and the relevant test passes. I left both `{new: true}` and `{returnOriginal: false}` for consistency with other functions in the file. From a quick look at documentation, they seemed to do the same thing, so it might be one can be removed.

### Part 3

Adds changes with basic tests to allow updates to tags on messages, as well as allowing users to find messages based on tags. I used the `Tag` class defined in `src/conversations/models/CreateChatConversation.dto.ts` for this purpose. This involved updating it by adding decorators. Updating tags is currently achieved by submitting a new array of tags, which should allow it to be used for deleting as well as adding tags. It would have also been possible to create separate create and delete functions that each take a single tag. 

Initially I tried to test the updated tags by a direct comparison of the created array of tags. After some fixes to the type of the `Tag` on messages, this test failed because the tags property returned was an unmarked object, including a new `_id` entry. I didn’t establish if this was expected behaviour, for which it might make sense to convert the object again, or if the failing test indicated a problem in the code I had written. For now, I updated the test to check the submitted tag `id`, but it may be that the earlier test was rightly catching an issue and code elsewhere should be changed. 