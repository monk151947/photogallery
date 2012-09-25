class Tagging < ActiveRecord::Base
  belongs_to :tag
  belongs_to :searchapp
  # attr_accessible :title, :body
end
