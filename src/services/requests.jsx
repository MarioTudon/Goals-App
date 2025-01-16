export async function  requestGoals() {
    const response = await fetch('/Goals-App/goals.json');
    const goals = await response.json();
    return goals;
}