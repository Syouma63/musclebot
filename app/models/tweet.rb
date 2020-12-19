class Tweet < ApplicationRecord
  # belongs_to :user

  validates :text, presence: true

  mount_uploader :image, ImageUploader
end
