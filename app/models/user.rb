class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
         validates :nickname, uniqueness: true
  
  has_many :tweets, dependent: :destroy

  mount_uploader :image, ImageUploader
end
