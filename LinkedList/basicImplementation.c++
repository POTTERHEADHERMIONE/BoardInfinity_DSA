#include <iostream>
#include <vector>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int x)
    {
        data = x;
        next = nullptr;
    }
};

Node *insertStart(int x, Node *head)
{
    Node *temp = new Node(x);
    temp->next = head;
    head = temp;
    return head;
}

// https : // www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1

Node *insertEnd(int x, Node *head)
{
    Node *temp = new Node(x);
    temp->next = nullptr;

    if (head == nullptr)
        return temp;

    Node *current = head;
    while (current->next != nullptr)
    {
        current = current->next;
    }

    current->next = temp;
    return head;
}

Node *insertAtPosition(int x, int pos, Node *head)
{
    if (pos < 0)
        return head;

    Node *newNode = new Node(x);

    if (pos == 0)
    {
        newNode->next = head;
        return newNode;
    }

    Node *curr = head;
    for (int i = 0; i < pos - 1 && curr != nullptr; ++i)
    {
        curr = curr->next;
    }

    if (curr == nullptr)
    {
        // Position is out of bounds
        delete newNode;
        return head;
    }

    newNode->next = curr->next;
    curr->next = newNode;

    return head;
}

Node *deleteBegin(Node *head)
{
    if (head == NULL)
        return NULL;

    Node *temp = head;
    temp = temp->next;
    delete (head);
    return temp;
}

Node *deleteFromEnd(Node *head)

{
    if (head == NULL)
        return NULL;
    if (head->next == NULL)
    {
        delete (head);
        return NULL;
    }

    Node *temp = head;
    while (temp->next->next != NULL) // Thsi stops at the last second position
    {
        temp = temp->next;
    }

    Node *curr = temp->next;
    delete (curr);
    temp->next = NULL;   // This step is very important because, if this is not there then it will give me segmentation falut, as the temp->next will be assigned to nothing.
    return head;
}

int main()
{
    Node *head = nullptr;
    Node *root = nullptr;

    // Insert at the start

    root = insertStart(5, root);
    root = insertStart(15, root);
    root = insertStart(35, root);

    // Insert at the end
    root = insertEnd(45, root);
    root = insertEnd(55, root);

    // // Insert at position 2

    root = insertAtPosition(25, 2, root);
// Delete from the beginning
    root = deleteBegin(root);

    // Delete from the end
    root = deleteFromEnd(root);

    // Print the linked list
    Node *current = root;
    while (current != nullptr)
    {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;

    return 0;
}