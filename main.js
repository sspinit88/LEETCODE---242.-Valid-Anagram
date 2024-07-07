/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false



Ваша задача - определить, является ли строка t анаграммой строки s.

Анаграмма - это слово или фраза, образованная путем перестановки букв другого слова или фразы, обычно используя все исходные буквы ровно один раз.

Вот шаги, которые мы будем следовать:

1. Если длины строк s и t не равны, верните false.
2. Создайте словарь для подсчета букв в строке s.
3. Пройдите по каждой букве в строке t. Если буква присутствует в словаре и счетчик больше 0, уменьшите счетчик. В противном случае верните false.
4. Если вы прошли все буквы в строке t и не вернули false, верните true.

Your task is to determine whether the string t is an anagram of the string s.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Here are the steps we will follow:

1. If the lengths of strings s and t are not equal, return false.
2. Create a dictionary to count the letters in string s.
3. Go through each letter in string t. If the letter is present in the dictionary and the counter is more than 0, decrease the counter. Otherwise, return false.
4. If you have gone through all letters in string t and have not returned false, return true.

*/

function isAnagram(s, t) {
    // Если длины строк s и t не равны, возвращаем false
    // If the lengths of strings s and t are not equal, return false
    if (s.length !== t.length) {
        return false;
    }

    // Создаем словарь для подсчета букв в строке s
    // Create a dictionary to count the letters in string s
    let count = {};
    for (let char of s) {
        if (!count[char]) count[char] = 0;
        count[char]++;
    }

    // Проходим по каждой букве в строке t
    // Go through each letter in string t
    for (let char of t) {
        // Если буква присутствует в словаре и счетчик больше 0, уменьшаем счетчик
        // If the letter is present in the dictionary and the counter is more than 0, decrease the counter
        if (!count[char] || count[char] <= 0) {
            return false;
        }
        count[char]--;
    }

    // Если мы прошли все буквы в строке t и не вернули false, возвращаем true
    // If we have gone through all letters in string t and have not returned false, return true
    return true;
}
