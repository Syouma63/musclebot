json.text @comment.text
json.user_id @comment.user.id
json.nickname @comment.user.nickname
json.created_at @comment.created_at.strftime("%Y-%m-%d %H:%M")