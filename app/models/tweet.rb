class Tweet < ApplicationRecord
    belongs_to :user

    validates :name, :text, :video, presence: true

    mount_uploader :video, VideoUploader

    has_many :comments, dependent: :destroy

    has_many :likes, dependent: :destroy

    def like_user(user_id)
      likes.find_by(user_id: user_id)
    end
end
